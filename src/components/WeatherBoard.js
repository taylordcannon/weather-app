import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherBoard extends Component {
    state = {
      addingList: false
    };

    toggleAddingCard = () =>
    this.setState({ addingCard: !this.state.addingCard });

    render() {
        const { board } = this.props;
        const { addingCard } = this.state;

        return (
            <div className="Board" ref={provided.innerRef}>
            {board.cards.map((CardId, index) => {
                return <Card cardId={cardId} key={listId} index={index} />;
            })}

            {provided.placeholder}

            <div className="Add-Card">
                {addingCard ? (
                <AddCard toggleAddingCard={this.toggleAddingCard} />
                ) : (
                <div
                    onClick={this.toggleAddingCard}
                    className="Add-Card-Button"
                >
                    <ion-icon name="add" /> Add a list
                </div>
                )}
            </div>
            </div>
          );
        }
      }
      
      const mapStateToProps = state => ({ board: state.board });
      
      export default connect(mapStateToProps)(Board);