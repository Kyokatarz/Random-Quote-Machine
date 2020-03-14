const randomQuotes = [
    {
        quote: 'Rule your mind or it will rule you.',
        author: 'Horace'
    },
    
    {
        quote: 'Sometimes you have to lose all you have to find out who you truly are.',
        author: 'Roy T. Bennett'
    },
    
    {
        quote: 'And people who don’t dream, who don’t have any kind of imaginative life, they must… they must go nuts. I can’t imagine that.',
        author: 'Stephen King'
    },
    
    {
        quote: 'You will never be able to escape from your heart. So it\'s better to listen to what it has to say.',
        author: 'Paulo Coelho'
    },
    
    {
        quote: 'Watch for the thing that will show itself to you. Because that thing, when you find it, will be your future.',
        author: 'Arthur Golden'
    },
    
    {
        quote: 'Trees that are slow to grow bear the best fruit.',
        author: 'Moliere'
    },
    
    {
        quote: 'Most people overestimate what they can do in one year and underestimate what they can do in ten years.',
        author: 'Bill Gates'
    },
    
    {
        quote: 'It is not worth the while to let our imperfections disturb us always.',
        author: 'Henry David Thoreau'
    },
    
    {
        quote: 'The only person who can pull me down is myself, and I\'m not going to let myself pull me down anymore.',
        author: 'C. JoyBell C'
    },
    
    {
        quote: 'A man, though wise, should never be ashamed of learning more, and must unbend his mind.',
        author: 'Sophocles'
    },
    
    {
        quote: 'Surround yourself only with people who are going to take you higher.',
        author: 'Oprah Winfrey'
    }
]
const randomColor = ['#34E5FF', '#ADBDFF', '#B74F6F',
                     '#2A2D34','#F26430','#02182B',
                    '#C49991','#6461A0', '#92374D', '#231651']

class QuoteBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quote: 'Quote Goes Here',
            author: 'Author Goes Here',
            number: null,
            color: null
        }
        
    this.GetNewQuote = this.GetNewQuote.bind(this)
    }
    
    GetNewQuote(){
        let randomNumber = Math.floor(Math.random() * randomQuotes.length)
            
        if (randomNumber == this.state.number){
            this.GetNewQuote();
        } //prevent same quote twice
        
        else this.setState({
            number: randomNumber,
            quote: randomQuotes[randomNumber]['quote'],
            author: randomQuotes[randomNumber]['author'],
            color: randomColor[randomNumber]
        });
        
        let container = document.getElementById('container')
        container.style.transition = 'all 1s linear';
        container.style.backgroundColor = this.state.color
    };
    
    handleClick(){
        this.GetNewQuote()
        
    }
    
    componentDidMount(){
        this.GetNewQuote()
        
    }
   

    render(){
         let twitterURL = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=".concat(this.state.quote," -",this.state.author);
        
        return(
            <div id='container'>
                <div id="quote-box">
                <div id="text-box">
                    <p id='text'>"{this.state.quote}"</p>
                </div>
                <div id="author-box">
                    <p id='author'>-{this.state.author}.</p>
                </div>
                <div id='button-box'>
                    <a href = {twitterURL} id='tweet-quote' target='_blank'><i class="fab fa-twitter-square fa-3x"></i></a>
                    <button id="new-quote" onClick = {this.handleClick.bind(this)}>New Quote</button>
                </div>
                </div>
            </div>
        )
    }
}

let domContainer = document.querySelector('#quoteBoxContainer');
ReactDOM.render(<QuoteBox/>, domContainer);