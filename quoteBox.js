var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var randomQuotes = [{
    quote: 'Rule your mind or it will rule you.',
    author: 'Horace'
}, {
    quote: 'Sometimes you have to lose all you have to find out who you truly are.',
    author: 'Roy T. Bennett'
}, {
    quote: 'And people who don’t dream, who don’t have any kind of imaginative life, they must… they must go nuts. I can’t imagine that.',
    author: 'Stephen King'
}, {
    quote: 'You will never be able to escape from your heart. So it\'s better to listen to what it has to say.',
    author: 'Paulo Coelho'
}, {
    quote: 'Watch for the thing that will show itself to you. Because that thing, when you find it, will be your future.',
    author: 'Arthur Golden'
}, {
    quote: 'Trees that are slow to grow bear the best fruit.',
    author: 'Moliere'
}, {
    quote: 'Most people overestimate what they can do in one year and underestimate what they can do in ten years.',
    author: 'Bill Gates'
}, {
    quote: 'It is not worth the while to let our imperfections disturb us always.',
    author: 'Henry David Thoreau'
}, {
    quote: 'The only person who can pull me down is myself, and I\'m not going to let myself pull me down anymore.',
    author: 'C. JoyBell C'
}, {
    quote: 'A man, though wise, should never be ashamed of learning more, and must unbend his mind.',
    author: 'Sophocles'
}, {
    quote: 'Surround yourself only with people who are going to take you higher.',
    author: 'Oprah Winfrey'
}];
var randomColor = ['#34E5FF', '#ADBDFF', '#B74F6F', '#2A2D34', '#F26430', '#02182B', '#C49991', '#6461A0', '#92374D', '#231651'];

var QuoteBox = function (_React$Component) {
    _inherits(QuoteBox, _React$Component);

    function QuoteBox(props) {
        _classCallCheck(this, QuoteBox);

        var _this = _possibleConstructorReturn(this, (QuoteBox.__proto__ || Object.getPrototypeOf(QuoteBox)).call(this, props));

        _this.state = {
            quote: 'Quote Goes Here',
            author: 'Author Goes Here',
            number: null,
            color: null
        };

        _this.GetNewQuote = _this.GetNewQuote.bind(_this);
        return _this;
    }

    _createClass(QuoteBox, [{
        key: 'GetNewQuote',
        value: function GetNewQuote() {
            var randomNumber = Math.floor(Math.random() * randomQuotes.length);

            if (randomNumber == this.state.number) {
                this.GetNewQuote();
            } //prevent same quote twice

            else this.setState({
                    number: randomNumber,
                    quote: randomQuotes[randomNumber]['quote'],
                    author: randomQuotes[randomNumber]['author'],
                    color: randomColor[randomNumber]
                });

            var container = document.getElementById('container');
            container.style.transition = 'all 1s linear';
            container.style.backgroundColor = this.state.color;
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            this.GetNewQuote();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.GetNewQuote();
        }
    }, {
        key: 'render',
        value: function render() {
            var twitterURL = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=".concat(this.state.quote, " -", this.state.author);

            return React.createElement(
                'div',
                { id: 'container' },
                React.createElement(
                    'div',
                    { id: 'quote-box' },
                    React.createElement(
                        'div',
                        { id: 'text-box' },
                        React.createElement(
                            'p',
                            { id: 'text' },
                            '"',
                            this.state.quote,
                            '"'
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'author-box' },
                        React.createElement(
                            'p',
                            { id: 'author' },
                            '-',
                            this.state.author,
                            '.'
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'button-box' },
                        React.createElement(
                            'a',
                            { href: twitterURL, id: 'tweet-quote', target: '_blank' },
                            React.createElement('i', { 'class': 'fab fa-twitter-square fa-3x' })
                        ),
                        React.createElement(
                            'button',
                            { id: 'new-quote', onClick: this.handleClick.bind(this) },
                            'New Quote'
                        )
                    )
                )
            );
        }
    }]);

    return QuoteBox;
}(React.Component);

var domContainer = document.querySelector('#quoteBoxContainer');
ReactDOM.render(React.createElement(QuoteBox, null), domContainer);