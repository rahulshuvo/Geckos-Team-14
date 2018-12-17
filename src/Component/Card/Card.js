import React, { Fragment } from "react";
import { Draggable } from 'react-beautiful-dnd';
import CheckList from './CheckList';
import { faTextHeight } from "@fortawesome/free-solid-svg-icons";

import CardModal from "../CardModal/CardModal"

export default class Card extends React.Component {

    state = {
        isModalOpen: false
    }
    

    toggleModal = () => {
        const { isModalOpen } = this.state
        this.setState({
            isModalOpen: !isModalOpen
        })
    }

    render() {
        const { isModalOpen } = this.state
        const { content, editCard, deleteCard, cardId, list, card } = this.props;
        return (
            <Fragment>
                <Draggable draggableId={this.props.cardId} index={this.props.index}>
                    {provided => (

                        <li
                            className="card"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            onClick={this.toggleModal}
                        >
                            {content}
                            <button
                                className="btn btn--delete-card"
                                onClick={() => deleteCard(cardId, list)}
                            >
                                X
                      </button>
                        </li>

                    )}
                </Draggable>
                <CardModal 
                    card={card}
                    cardId={cardId}
                    toggleModal={this.toggleModal} 
                    isModalOpen={isModalOpen} 
                    editCard={editCard}/>
            </Fragment>
        )
    }
}
