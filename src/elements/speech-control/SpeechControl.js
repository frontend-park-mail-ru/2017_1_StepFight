/**
 * Created by Denis on 21.05.2017.
 */
import "./speech-element.scss";

export default class SpeechControl {
    constructor(node) {
        this.node = node;
        this.isActive = false;
    }

    render() {
        this.button = document.createElement('div');
        this.button.setAttribute('class', 'speech-element');

        let img = document.createElement('img');
        img.setAttribute('src', '/src/img/microphone.png');
        img.setAttribute('width', '60px');
        img.setAttribute('height', '60px');
        this.button.appendChild(img);

        this.node.appendChild(this.button);
    }

    start() {
        this._initListeners();
    }

    _initListeners() {
        this.speechRecognition = new window.ya.speechkit.SpeechRecognition();

        this.button.addEventListener('click', (event) => {
            if (this.isActive) {
                this.speechRecognition.stop();
            }
            else {
                this.speechRecognition.start({
                    dataCallback: this._analiseSpeech.bind(this),
                    initCallback: this._startRecognize.bind(this),
                    errorCallback: this._errorRecognize.bind(this),
                    stopCallback: this._stopRecognize.bind(this),
                    infoCallback: this._statusRecognize.bind(this),
                    utteranceSilence: 60
                });
            }
        });
    }

    _startRecognize() {
        this.isActive = true;
        this._startAnimation();
    }

    _errorRecognize(err) {
        console.warn(err);
        this.isActive = false;
        this._finishAnimation();
    }

    _statusRecognize(sent_bytes, sent_packages, processed, format) {
        /*console.log("Отправлено данных на сервер: " + sent_bytes);
         console.log("Отправлено пакетов на сервер: " + sent_packages);
         console.log("Количество пакетов, которые обработал сервер: " + processed);
         console.log("До какой частоты понижена частота дискретизации звука: " + format);*/
    }

    _stopRecognize() {
        this.isActive = false;
        this._finishAnimation();
        console.log("Запись звука прекращена.");
    }

    _analiseSpeech(text, done, merge, words, biometry) {
        if (done && text !== ''){
            console.warn(`RESULT=${text}`);
            this.speechRecognition.stop();
        }
        /*console.log("Распознанный текст: " + text);
        console.log("Является ли результат финальным:" + done);
        console.log("Число обработанных запросов, по которым выдан ответ от сервера: " + merge);
        console.log("Подробная информаия о распознанных фрагметах: " + words);
        console.log(biometry);*/
    }

    _startAnimation() {
        const frames = [
            {transform: 'scale(1)', offset: 0, opacity: 1},
            {transform: 'scale(1.05)', opacity: .8, offset: .333333},
            {transform: 'scale(1.06)', opacity: .7, offset: .666667},
            {transform: 'scale(1.07)', opacity: .8, offset: 1}
        ];

        const timings = {
            duration: 700,
            iterations: Infinity,
            direction: 'alternate',
            fill: 'forwards',
            delay: 0,
            easing: 'ease-in-out'
        };
        this.button.classList.add('speech-element_active');
        this.buttonAnimation = this.button.animate(frames, timings);
    }

    _finishAnimation() {
        this.button.classList.remove('speech-element_active');
        if (typeof this.buttonAnimation !== 'undefined')
            this.buttonAnimation.cancel();
    }

}