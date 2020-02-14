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
            author: 'Author Goes Here',
            number: null
        };
        
    this.GetNewQuote = this.GetNewQuote.bind(this);
    };
    
    GetNewQuote(){
        let randomNumber = Math.floor(Math.random() * randomQuotes.length);
        
        if (randomNumber == this.state.number){
            this.GetNewQuote();
        } //prevent same quote twice
        
        else this.setState({
            number: randomNumber,
            quote: randomQuotes[randomNumber]['quote'],
            author: randomQuotes[randomNumber]['author']
            
        });
    
    };
    
    
    componentDidMount(){
        this.GetNewQuote();
        
    };
   

    render(){
         let twitterURL = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=".concat(this.state.quote," -",this.state.author);
        
        return(
           <div style={quoteBoxStyle} id="quote-box">
                
                <div id="text-box" style={textBoxStyle}>
                    <p id='text'>"{this.state.quote}"</p>
                </div>
                
                <div id="author-box" style={authorBoxStyle}>
                    <p id='author'>-{this.state.author}.</p>
                </div>
                
                <div id='button-box' style={buttonBoxStyle}>
                    <a href = {twitterURL} id='tweet-quote'><i class="fab fa-twitter-square fa-3x"></i></a>
                    
                    <button id="new-quote" style={newQuoteBtnStyle} onClick = {this.GetNewQuote}>New Quote</button>
                </div>
            </div> 
        );
    }
}

class TestSubject extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
        <div>
            <h1> THIS WORKS</h1>    
        </div>
        );
    }
}

let quoteBoxStyle = {
    height: '18.75rem',
    width: '38.5rem',
    border: '1.5px solid #0373fc',
    borderRadius: 10,
    padding: '2.5%',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItem:'center',
    position: 'absolute',
    backgroundColor: 'white',
    opacity: '85%',
    boxShadow: '2px 7px 7px black'
};

let textBoxStyle = {
    //border: '2px solid red',
    height: '50%',
    paddingLeft: '0.625rem',
    fontSize: "1.5rem",
    fontFamily: 'Cairo, sans-serif',
    textAlign: 'center'
};

let authorBoxStyle = {
    fontSize: '1.8rem',
    display: 'flex',
    justifyContent: 'flex-end',
    //border: '2px solid blue',
    paddingRight: '1.5rem',
    fontFamily: 'Zhi Mang Xing',
    
};

let buttonBoxStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    //border: '1px solid red'
}; 

let newQuoteBtnStyle = {
    marginLeft: 'auto',
    paddingRight: '0px',
    textAlign: 'center',
    fontSize: '1.7rem',
    width: '70%',
    height: '3rem',
    fontFamily: 'Dancing Script, cursive',
    fontWeight: 'bold',
    
    
}


let domContainer = document.querySelector('#quoteBoxContainer');
ReactDOM.render(<QuoteBox/>, domContainer);









