'use strict';

// -------------- Объект с вопросами и ответами -------------- //

var test = [{
    question: '1. Чему равна сумма: [ ] + 1 + 2?',
    answers: ['1', 'NaN', 'undefined', '12'],
    value: ['false', 'false', 'false', 'true']
}, {
    question: '2. Чему равно: 0 || 1 && 2 || 3 ?',
    answers: ['0', '1', '2', '3', 'true', 'false'],
    value: ['false', 'false', 'true', 'false', 'false', 'false']
}, {
    question: '3. Какие вызовы parseInt вернут число?',
    answers: ['parseInt("1px")', 'parseInt("-1.2")', 'parseInt("0 минут")', 'parseInt("$1.2")'],
    value: ['true', 'true', 'true', 'false']
}];

// -------------- Запись данных в локалсторэдж -------------- //

localStorage.setItem('test', JSON.stringify(test));
var memory = localStorage.getItem('test');
memory = JSON.parse(memory);

// -------------- Шаблонизатор -------------- //

$(function () {
    var $html = $('#test').html();
    var tmpl = _.template($html);
    $('body').append(tmpl(memory));
});

// -------------- Проверка ответов -------------- //

$(function () {

    // Изменение атрибута 'checked'

    var $answer = $('input[type="checkbox"]');
    $answer.on('click', function () {
        if ($(this).prop('checked') === true) {
            $(this).attr('checked', 'checked');
        } else {
            $(this).removeAttr('checked');
        }
    });

    // Только один вариант ответа у первых 2-ух вопросов

    var $quest1 = $('.question1 input[type="checkbox"]');
    var $quest2 = $('.question2 input[type="checkbox"]');
    $quest1.on('click', function () {
        $quest1.filter(':checked').not(this).removeAttr('checked');
    });
    $quest2.on('click', function () {
        $quest2.filter(':checked').not(this).removeAttr('checked');
    });

    // Проверка результатов при клике по 'submit button'

    var $submitResults = $('input[type="button"]');
    $submitResults.on('click', function () {
        event.preventDefault();
        var $result = true;
        $answer.each(function () {
            if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
                $result = false;
                return false;
            }
        });
        console.log($result);

        //Подсчет правильных ответов

        // Запись всех атрибутов 'value' чекбоксов в массив
        var $trueResultsArray = _.flatMap(memory, 'value');
        console.log($trueResultsArray);
        // Запись атрибутов 'value' выбранных чекбоксов в массив
        var $resultsArray = $answer.map(function () {
            if ($(this).prop('checked')) {
                return this.value;
            }
        }).get();
        console.log($resultsArray);
        var rightAnswers = 0;
        var trueRightAnswers = 0;
        var badAnswers = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = $resultsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var value = _step.value;

                if (value == 'true') {
                    rightAnswers++;
                } else {
                    badAnswers++;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = $trueResultsArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _value = _step2.value;

                if (_value == 'true') {
                    trueRightAnswers++;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        var count = rightAnswers * 100 / trueRightAnswers;

        if ($result === false) {
            $('.modal-title').html('Тест не пройден! Хватит гадать!');
            $('.modal-result').html('Вы ответили верно на : ' + count + '% вопросов');
        }

        if ($resultsArray.length > trueRightAnswers) {
            $('.modal-title').html('Тест не пройден! Хватит гадать!');
            $('.modal-result').html('Может повторим попытку?');
        }

        if ($result === true) {
            $('.modal-title').html('Поздравляем! Вы гений!');
            $('.modal-result').html('Вы ответили верно на : ' + count + '% вопросов');
        }

        // Показ модального окна
        $('.overlay').fadeIn(400, function () {
            $('.modal-window').css('display', 'block').animate({ opacity: 1, top: '50%' }, 200);
        });

        // Зaкрытие мoдaльнoгo oкнa
        $('.modal-close, .overlay, .modal-buttons input').on('click', function () {
            $('.modal-window').animate({ opacity: 0, top: '45%' }, 200, function () {
                $(this).css('display', 'none');
                $('.overlay').fadeOut(400);
            });
            $answer.each(function () {
                $(this).removeAttr('checked');
                localStorage.clear();
            });
        });
    });
});