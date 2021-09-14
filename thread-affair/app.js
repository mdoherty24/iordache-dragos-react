class NewsletterForm extends React.Component {
  render() {
    return <h1>hello world</h1>;
  }
}

const newsletterContainer = document.querySelector('.home-newsletter');
ReactDOM.render(<NewsletterForm></NewsletterForm>, newsletterContainer);
