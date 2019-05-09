'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      // return 'You liked this. '+window._MyCompData.something;
      return 'You liked this.,'+this.props.initialName+".";
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}


const domContainer = document.querySelector('#react-container');
const initialName = domContainer.dataset.name;
ReactDOM.render(<LikeButton initialName={initialName} />, domContainer);