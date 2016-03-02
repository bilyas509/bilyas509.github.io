//v. 1.2.0
//================================================================================================

// Recuperation des données utilisateur

var datafb = new Firebase('https://kleegp.firebaseio.com/'); 


//================================================================================================


// compteur du score
var compteur = 0;



// A mettre sur le firebase

var questions = [
    {
        title: 'Quel est le PIB de la France?',
        answers: [
            '30 Md$',
            '300 Md$',
            '3 000 Md$',
            '30 000 Md$'
        ],
        correctAnswerKey: 2
    },
    
    {
        title: 'Quel est le PIB de la Chine?',
        answers: [
            '11 Md$',
            '110 Md$',
            '1 100 Md$',
            '11 000 Md$'
        ],
        correctAnswerKey: 3
    },
    
    {
        title: 'Quel est le PIB de la Turquie?',
        answers: [
            '86 Md$',
            '860 Md$',
            '8 600 Md$',
            '86 000 Md$'
        ],
        correctAnswerKey: 1
    },
    
    {
        title: 'Quel est le PIB du Maroc',
        answers: [
            '12 Md$',
            '120 Md$',
            '1 200 Md$',
            '12 000 Md$'
        ],
        correctAnswerKey: 1
    }
];


// ==================================================================================================
if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function(target, firstSource) {
            'use strict';
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
            }
            
            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                nextSource = Object(nextSource);
                
                var keysArray = Object.keys(Object(nextSource));
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
    });
}

function m() {
    var res = {};
    for (var i = 0; i < arguments.length; ++i) {
        if (arguments[i]) {
            Object.assign(res, arguments[i]);
        }
    }
    return res;
}
// ===================================================================================================

var SimpleQuizAnswer = React.createClass({
    
    getInitialState: function() {
        return {
            answeredKey: -1,
            radioButton: null,
        };
    },
    
    propTypes: {
        label: React.PropTypes.string,
        appId: React.PropTypes.string,
        questionKey: React.PropTypes.number,
        answerKey: React.PropTypes.number,
        correctAnswerKey: React.PropTypes.number,
        answered: React.PropTypes.bool,
        onAnswer: React.PropTypes.func,
    },
    
    render: function() {
        
        var styles = {
            answer: {
                display: 'block',
                margin: 'auto',
                marginBottom: 5,
                padding: 13,
                border: '1px solid #bcd',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: 14,
                boxShadow: '0 1px 1px #e7e7e7',
                maxWidth: 430,
                borderRadius: 3
            },
            normal: {
                background: '#fff',
                color: 'inherit',
                borderColor: '#bcd',
            },
            correct: {
                background: '#b8e7a6',
                color: '#516648',
                borderColor: '#89cc6e',
            },
            incorrect: {
                background: '#ff8d96',
                color: '#96474e',
                borderColor: '#e36f6f',
            },
            radio: {
                marginRight: 10
            }
        };
        
        var appId = this.props.appId;
        var questionKey = this.props.questionKey;
        var answerKey = this.props.answerKey;
        
        var radioButton = null;
        var radioChecked = this.state.radioButton ? this.state.radioButton.checked : false;
        
        var cstyle = styles.normal;
        if(this.props.answered) {
            if(radioChecked || this.props.answerKey === this.props.correctAnswerKey) {
                cstyle = this.props.correctAnswerKey === this.props.answerKey ? styles.correct : styles.incorrect;
            }
        }
        
        var self = this;
        var onAnswer = function() {
            var radioButton = ReactDOM.findDOMNode(self);
            self.setState({answeredKey: answerKey, radioButton: radioButton});
            self.props.onAnswer.bind(self, answerKey)();
        };
        
        return (
            <label style={m(styles.answer, cstyle)}>
                <input type="radio" style={styles.radio} name={'simplequiz_'+appId+'_'+questionKey} onChange={onAnswer} disabled={this.props.answered}></input>
                {this.props.label}
            </label>
        );
        
    }
    
});

var SimpleQuizQuestion = React.createClass({
    mixins: [ReactFireMixin],
    
    propTypes: {
        appId: React.PropTypes.string,
        questionKey: React.PropTypes.number,
        title: React.PropTypes.string,
        answers: React.PropTypes.array,
        correctAnswerKey: React.PropTypes.number,
        visible: React.PropTypes.bool,
        answered: React.PropTypes.bool,
        onAnswer: React.PropTypes.func,
    },
    
    render: function() {
        
        var styles = {
            title: {
                fontSize: 26,
                margin: 0,
                marginBottom: 60
            },
            hidden: {
                display: 'none',
            },
            visible: {
                display: 'block',
            }
        };
        
        var self = this;
        var appId = this.props.appId;
        var questionKey = this.props.questionKey;
        var correctAnswerKey = this.props.correctAnswerKey;
        var answered = this.props.answered;
        
        var onAnswer = function(answer_index) {
            self.props.onAnswer(self.props.questionKey, answer_index, answer_index === self.props.correctAnswerKey);
        };
        
        var answers = this.props.answers.map(function(answer, key) {
            return (<SimpleQuizAnswer
                label={answer}
                key={key}
                appId={appId}
                questionKey={questionKey}
                correctAnswerKey={correctAnswerKey}
                answerKey={key}
                answered={answered}
                onAnswer={onAnswer} />);
        });
        
        return (
            <div style={m(styles.hidden, this.props.visible && styles.visible)}>
                <h3 style={styles.title}>{this.props.title}</h3>
                {answers}
            </div>
        );
        
    }
    
});

var SimpleQuizApplication = React.createClass({
    mixins: [ReactFireMixin],
    
    propTypes: {
        id: React.PropTypes.string,
        questions: React.PropTypes.array
    },
    
    getInitialState: function() {
        return {
            currentQuestionKey: 0,
            currentAnswerKey: -1,
            answered: false,
            answeredQuestions: [],
            errorShow: false,
            point : 0
        };
    },
    
    score: function() {
        var res = 0;
        var self = this;

            this.state.answeredQuestions.forEach(function(correct) {
            if(correct) 
            {
                res++;
                this.datafb = new Firebase('https://kleegp.firebaseio.com/');
                this.datafb.child("users").child("ID000001").child("point").transaction(function (current_value) {

                self.state.currentQuestionKey < self.props.questions.length ? b = 0 : b = 1;
                if(compteur != res){compteur = res; temp = compteur};

                var dataToSend = ((parseInt(current_value) || 0) + b).toString()
                console.log(dataToSend);
                return dataToSend;
                }.bind(this))
             };
             }.bind(this));
                
        return res;
    },
    
    getDefaultProps: function() {
        return {
            questions: []
        };
    },
    
    nextQuestion: function() {
        var self = this;
        this.setState({
            answered: false,
            currentQuestionKey: self.state.currentQuestionKey+1,
            currentAnswerKey: -1,
            errorShow: false,
        })





    },
    
    answerQuestion: function() {
        if(this.state.currentAnswerKey >= 0) {
            this.setState({
                answered: true,
                errorShow: false,
            });
        } else {
            this.setState({
                errorShow: true,
            });
        }
    },
    
    render: function() {
        var self = this;
        
        var styles = {
            container: {
                background: '#f2f8fc',
                borderTop: '4px solid #cfdbe3',
                padding: '60px 30px',
                textAlign: 'center',
                fontFamily: 'Arial, Tahoma, sans-serif',
                color: '#678'
            },
            footer: {
                paddingTop: 30,
            },
            button: {
                padding: '18px 40px',
                backgroundColor: '#5babcd',
                color: '#fff',
                border: 0,
                borderRadius: 2,
                fontWeight: 'bold',
                fontSize: 15,
                cursor: 'pointer',
            },
            questionState: {
                marginTop: 15,
                fontSize: 14,
            },
            hidden: {
                display: 'none',
            },
            visible: {
                display: 'block',
            },
            resultContainer: {
                padding: '0',
            },
            resultTitle: {
                fontSize: 38,
                fontWeight: 'bold',
                margin: 0,
                marginBottom: 60,
            },
            resultGuess: {
                padding: '30px 10%',
                textAlign: 'center',
                fontSize: 24,
                background: '#fff',
                boxShadow: '1px 1px 1px 1px #def',
                display: 'inline-block',
                marginBottom: 30,
            },
            errorMessage: {
                display: 'none',
                color: '#b33',
                fontSize: 13,
                fontWeight: 'bold',
                marginBottom: 15,
            }
        };
        
        var appId = this.props.id;
        var currentQuestionKey = this.state.currentQuestionKey;
        var answered = this.state.answered;
        
        var onAnswer = function(questionKey, currentAnswerKey, correct) {
            var answeredQuestions = this.state.answeredQuestions;
            answeredQuestions[questionKey] = correct;
            this.setState({currentAnswerKey: currentAnswerKey});
        }.bind(this);
        
        var questions = this.props.questions.map(function(question, key) {
            return (<SimpleQuizQuestion
                key={key}
                questionKey={key}
                visible={currentQuestionKey === key}
                appId={appId}
                title={question.title}
                answers={question.answers}
                correctAnswerKey={question.correctAnswerKey}
                answered={answered}
                onAnswer={onAnswer} />
            );
        });

        return (
            <div style={styles.container}>
                <div style={self.state.currentQuestionKey >= self.props.questions.length ? styles.hidden : styles.visible}>
                    {questions}
                        
                    <div style={styles.footer}>
                        <div style={m(styles.hidden, this.state.answered && styles.visible)}>
                            <button style={styles.button} onClick={self.nextQuestion}>Suivant</button>
                        </div>
                        
                        <div style={m(styles.errorMessage, this.state.errorShow ? styles.visible : styles.hidden)}>
                            Merci de choisir une réponse
                        </div>
                        
                        <div style={m(styles.hidden, !this.state.answered && styles.visible)}>
                            <button style={styles.button} onClick={self.answerQuestion}>Répondre</button>
                        </div>
                        
                        <div style={styles.questionState}>
                            <strong>{currentQuestionKey+1}</strong> sur <strong>{questions.length}</strong>
                        </div>
                    </div>
                </div>
                <div style={self.state.currentQuestionKey < self.props.questions.length ? styles.hidden : styles.visible}> 
                    <div style={styles.resultContainer}>
                        <h3 style={styles.resultTitle}>Résultat du quiz</h3>
                        
                        <div style={styles.resultGuess}>
                            Votre score est de :  <strong>{this.score()}</strong> sur <strong>{this.props.questions.length}</strong>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
});




function createSimpleQuiz(id, questions, container) {
    return ReactDOM.render(
        <SimpleQuizApplication id={id} questions={questions} />,
        container
    );
};


// code à mettre après avoir regler le problème du firebase
// datafb.on("value", function(data) {

//     questions = data.child("quiz").child("PIB").val();
//     createSimpleQuiz('myQuiz', questions, document.getElementById('react-simple-quiz'));
//     console.log(questions.length);

// });


createSimpleQuiz('myQuiz', questions, document.getElementById('react-simple-quiz'));




