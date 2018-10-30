'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionPart) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionPart != option;
                    }) };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var random = Math.floor(Math.random() * this.state.options.length);
            var element = this.state.options[random];
            console.log(random);
            alert(element);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter some valid value';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Typed value is already exist';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
            // console.log(options);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('componentDidMount');
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
                console.log('componentDidUpdate!');
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount!');
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'heello';
            var name = 'this is coming from header components';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, name: name }),
                React.createElement(Action, { handlePick: this.handlePick }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOption: this.handleDeleteOption,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.name && React.createElement(
            'h2',
            null,
            props.name
        ),
        React.createElement(
            'h1',
            null,
            'this is an header '
        )
    );
};

Header.defaultProps = {
    title: 'Indecision App!',
    name: 'satyam agrawal'

    // class Header extends React.Component{
    //     render(){
    //         console.log(this.props);
    //         return(
    //             <div>
    //             <h1>{this.props.id}</h1>
    //             <h1>{this.props.name}</h1>
    //             <h1>this is an header </h1>
    //             </div>
    //         ) 
    //     }
    // }

};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: props.hasOption,
                onClick: props.handlePick
            },
            'What should i do'
        )
    );
};

// class Action extends React.Component{
//     // hit(){
//     //     alert('hello');
//     //     console.log(`this is ${React.Component}`)
//     // }
//     render(){
//         return (
//             <div>
//             <button disabled={this.props.hasOption} onClick={this.props.handlePick}>What should i do</button>
//             </div>
//         )
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'remove all'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        '   ',
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
            },
            'remove'
        )
    );
};
// class Options extends React.Component{
//     // constructor(props){
//     //     super(props);
//     //     this.rend=this.rend.bind(this);
//     // }
//     // rend(){
//     //     console.log(this.props.options);
//     // }
//     render(){
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>remove all</button>
//             <p>{this.props.id}</p>
//             {
//             this.props.options.map((option)=> <Option key={option} optionText={option}/>)
//             }
//             </div>  
//         );
//     }
// }

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'submit'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//             <p>{this.props.optionText}</p>  
//             </div>
//                 )
//     }
// }

var User = function User(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Name : ',
            props.Name
        ),
        React.createElement(
            'p',
            null,
            'Age : ',
            props.age,
            ' '
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, { options: [2, 3, 4, 5, 6] }), document.getElementById('app'));
