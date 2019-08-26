(function() {
  var GUI, RadialNav, animate, describeArc, describeSector, gui, iconsPath, polarToCartesian, random, toggleContext;

  iconsPath = 'icons.svg';

  // ===================================================
  // Util
  // ===================================================
  Snap.plugin(function(Snap, Element) {
    return Element.prototype.hover = function(f_in, f_out, s_in, s_out) {
      return this.mouseover(f_in, s_in).mouseout(f_out || f_in, s_out || s_in);
    };
  });

  polarToCartesian = function(cx, cy, r, angle) {
    angle = (angle - 90) * Math.PI / 180; // Degrees to radians
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle)
    };
  };

  describeArc = function(x, y, r, startAngle, endAngle, continueLine) {
    var alter, end, large, start;
    start = polarToCartesian(x, y, r, startAngle %= 360);
    end = polarToCartesian(x, y, r, endAngle %= 360);
    large = Math.abs(endAngle - startAngle) >= 180;
    alter = endAngle > startAngle;
    return `${(continueLine ? 'L' : 'M')}${start.x},${start.y} A${r},${r},0, ${(large ? 1 : 0)}, ${(alter ? 1 : 0)},${end.x},${end.y}`;
  };

  describeSector = function(x, y, r, r2, startAngle, endAngle) {
    return `${describeArc(x, y, r, startAngle, endAngle)} ${describeArc(x, y, r2, endAngle, startAngle, true)}Z`;
  };

  random = function(min, max) {
    return Math.random() * (max - min) + min;
  };

  animate = function(obj, index, start, end, duration, easing, fn, cb) {
    var ref;
    if ((ref = (obj.animation != null ? obj.animation : obj.animation = [])[index]) != null) {
      ref.stop();
    }
    return obj.animation[index] = Snap.animate(start, end, fn, duration, easing, cb);
  };

  toggleContext = function() {
    return document.body.classList.toggle('context');
  };

  // ===================================================
  // GUI
  // ===================================================
  GUI = class GUI {
    constructor(buttons) {
      this.paper = Snap(window.innerWidth, window.innerHeight);
      Snap.load(iconsPath, (icons) => {
        this.nav = new RadialNav(this.paper, buttons, icons);
        return this._bindEvents();
      });
    }

    // =========================
    // Private
    // =========================
    _bindEvents() {
      window.addEventListener('resize', () => {
        return this.paper.attr({
          width: window.innerWidth,
          height: window.innerHeight
        });
      });
      this.paper.node.addEventListener('mousedown', this.nav.show.bind(this.nav));
      return this.paper.node.addEventListener('mouseup', this.nav.hide.bind(this.nav));
    }

  };

  // ===================================================
  // RadialNav
  // ===================================================
  RadialNav = class RadialNav {
    constructor(paper, buttons, icons) {
      this.area = paper.svg(0, 0, this.size = 500, this.size).addClass('radialnav');
      this.c = this.size / 2; // Center
      this.r = this.size * 0.25; // Outer radius
      this.r2 = this.r * 0.35; // Inner radius
      this.angle = 360 / buttons.length;
      this.animDuration = 300;
      this.container = this.area.g();
      this.container.transform("s0");
      this.updateButtons(buttons, icons);
    }

    // =========================
    // Private
    // =========================
    _animateContainer(start, end, duration, easing) {
      return animate(this, 0, start, end, duration, easing, (val) => {
        return this.container.transform(`r${90 - 90 * val},${this.c},${this.c}s${val},${val},${this.c},${this.c}`);
      });
    }

    _animateButtons(start, end, min, max, easing) {
      var anim, el, i, ref, results;
      anim = (i, el) => {
        return animate(el, 0, start, end, random(min, max), easing, (val) => {
          return el.transform(`r${this.angle * i},${this.c},${this.c}s${val},${val},${this.c},${this.c}`);
        });
      };
      ref = this.container;
      results = [];
      for (i in ref) {
        el = ref[i];
        if (!Number.isNaN(+i)) {
          results.push(anim(i, el));
        }
      }
      return results;
    }

    _animateButtonHover(button, start, end, duration, easing, cb) {
      return animate(button, 1, start, end, duration, easing, ((val) => {
        button[0].attr({
          d: describeSector(this.c, this.c, this.r - val * 10, this.r2, 0, this.angle)
        });
        return button[2].transform(`s${1.1 - val * .1},${1.1 - val * .1},${this.c},${this.c}`);
      }), cb);
    }

    _sector() {
      return this.area.path(describeSector(this.c, this.c, this.r, this.r2, 0, this.angle)).addClass('radialnav-sector');
    }

    _icon(btn, icons) {
      var bbox, icon;
      icon = icons.select(`#${btn.icon}`).addClass('radialnav-icon');
      bbox = icon.getBBox();
      return icon.transform(`T${this.c - bbox.x - bbox.width / 2},${this.c - this.r + this.r2 - bbox.y - bbox.height / 2 - 5} R${this.angle / 2},${this.c},${this.c}S.7`);
    }

    _hint(btn) {
      var hint;
      hint = this.area.text(0, 0, btn.icon).addClass('radialnav-hint hide').attr({
        textpath: describeArc(this.c, this.c, this.r, 0, this.angle)
      });
      hint.select('*').attr({
        startOffset: '56'
      });
      return hint;
    }

    _button(btn, sector, icon, hint) {
      return this.area.g(sector, icon, hint).data('cb', btn.action).mouseup(function() {
        var base;
        return typeof (base = this.data('cb')) === "function" ? base() : void 0;
      }).hover(function() {
        var el, j, len, ref, results;
        ref = [this[0], this[1], this[2]];
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          el = ref[j];
          results.push(el.toggleClass('active'));
        }
        return results;
      }).hover(this._buttonOver(this), this._buttonOut(this));
    }

    _buttonOver(nav) {
      return function() {
        nav._animateButtonHover(this, 0, 1, 100, mina.easeinout);
        return this[2].removeClass('hide');
      };
    }

    _buttonOut(nav) {
      return function() {
        return nav._animateButtonHover(this, 1, 0, 1000, mina.elastic, (function() {
          return this.addClass('hide');
        }).bind(this[2]));
      };
    }

    // =========================
    // Public
    // =========================
    updateButtons(buttons, icons) {
      var btn, i, j, len, results;
      this.container.clear();
      results = [];
      for (i = j = 0, len = buttons.length; j < len; i = ++j) {
        btn = buttons[i];
        results.push(this.container.add(this._button(btn, this._sector(), this._icon(btn, icons), this._hint(btn))));
      }
      return results;
    }

    show(e) {
      this.area.attr({
        x: e.clientX - this.c,
        y: e.clientY - this.c
      });
      toggleContext();
      this._animateContainer(0, 1, this.animDuration * 8, mina.elastic);
      return this._animateButtons(0, 1, this.animDuration, this.animDuration * 8, mina.elastic);
    }

    hide() {
      toggleContext();
      this._animateContainer(1, 0, this.animDuration, mina.easeinout);
      return this._animateButtons(1, 0, this.animDuration, this.animDuration * 8, mina.easeinout);
    }

  };

  // ===================================================
  // Test
  // ===================================================
  gui = new GUI([
    {
      icon: 'pin',
      action: function() {
        return humane.log('Pinning...');
      }
    },
    {
      icon: 'search',
      action: function() {
        return humane.log('Opening Search...');
      }
    },
    {
      icon: 'cloud',
      action: function() {
        return humane.log('Connecting to Cloud...');
      }
    },
    {
      icon: 'settings',
      action: function() {
        return humane.log('Opening Settings...');
      }
    },
    {
      icon: 'rewind',
      action: function() {
        return humane.log('Rewinding...');
      }
    },
    {
      icon: 'preview',
      action: function() {
        return humane.log('Preview Activated...');
      }
    },
    {
      icon: 'delete',
      action: function() {
        return humane.log('Deleting...');
      }
    }
  ]);

  humane.timeout = 1000;

}).call(this);
