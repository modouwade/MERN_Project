import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";

const DeleteCard = ({ post }) => {
  const dispatch = useDispatch();

  const DeleteQuote = () => {
    dispatch(deletePost(post._id));
  };
  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez-vous vraiment supprimer cet article ?")) {
          DeleteQuote();
        }
      }}
    >
      <img src="./img/icons/trash.svg" alt="trash" />
    </div>
  );
};

export default DeleteCard;
