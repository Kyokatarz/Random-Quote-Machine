'use strict'

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
];

class QuoteBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quote: 'Quote Goes Here',
            author: 'Author Goes Here'
        };
        
    this.GetNewQuote = this.GetNewQuote.bind(this);
    };
    
    GetNewQuote(){
        let randomNumber = Math.floor(Math.random() * randomQuotes.length);
        
        this.setState({
            quote: randomQuotes[randomNumber]['quote'],
            author: randomQuotes[randomNumber]['author']
        });
    
    };
    
    
    componentWillMount(){
        this.GetNewQuote();
    };
    
    render(){
        
        return(
           <div style={quoteBoxStyle} id="quote-box">
                <div id="text-box">
                    <p id='text'>"{this.state.quote}"</p>
                </div>
                
                <div id="author-box">
                    <p id='author'>-{this.state.author}.</p>
                </div>
                
                <div id='button-box'>
                    <button id="new-quote" onClick = {this.GetNewQuote}>New Quote</button>
                </div>
            </div> 
        );
    }
}

let quoteBoxStyle = {
    height: '18.75rem',
    width: '38.5rem',
    fontSize: "1.5rem",
    border: '3px solid blue',
    borderRadius: 10,
    padding: '2.5%',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItem:'center',
    position: 'absolute',
    backgroundColor: 'white',
    opacity: '75%'
};

let textBoxStyle = {
    
    display: 'flex',
    alignItem: 'flex-start'
}

let domContainer = document.querySelector('#quoteBoxContainer');
ReactDOM.render(<QuoteBox/>, domContainer);
