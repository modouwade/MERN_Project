import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../actions/post.actions";
import FollowHandler from "../Profil/FollowHandler";
import { dateParser, isEmpty } from "../Utils";
import CardComments from "./CardComments";
import DeleteCard from "./DeleteCard";
import LikeButton from "./LikeButton";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpadated, setIsUpadate] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [texteUpdate, setTexteUpdate] = useState(null);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const updateItem = () => {
    if (texteUpdate) {
      dispatch(updatePost(post._id, texteUpdate));
      setIsUpadate(false);
    } else return null;
  };

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);
  return (
    <li className="card-container" key={post._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === post.posterId) return user.picture;
                    else return null;
                  })
                  .join("")
              }
              alt="poster-pic"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === post.posterId) return user.pseudo;
                        else return null;
                      })
                      .join("")}
                </h3>
                {post.posterId !== userData._id && (
                  <FollowHandler idToFollow={post.posterId} type={"card"} />
                )}
              </div>
              <span>{dateParser(post.createdAt)}</span>
            </div>
            {!isUpadated && <p>{post.message}</p>}
            {isUpadated && (
              <div className="update-post">
                <textarea
                  defaultValue={post.message}
                  onChange={(e) => setTexteUpdate(e.target.value)}
                />
                <div className="button-container">
                  <button className="btn" onClick={updateItem}>
                    Valider modifications
                  </button>
                </div>
              </div>
            )}

            {post.picture && (
              <img src={post.picture} alt="card-pic" className="card-pic" />
            )}
            {post.video && (
              <iframe
                width="500"
                height="300"
                src={post.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={post._id}
              ></iframe>
            )}
            {userData._id === post.posterId && (
              <div className="button-container">
                <div onClick={() => setIsUpadate(!isUpadated)}>
                  <img src="./img/icons/edit.svg" alt="edit" />
                </div>
                <DeleteCard post={post} />
              </div>
            )}
            <div className="card-footer">
              <div className="comment-icon">
                <img
                  src="./img/icons/message1.svg"
                  alt="comment"
                  onClick={() => setShowComments(!showComments)}
                />
                <span>{post.comments.length}</span>
              </div>
              <LikeButton post={post} />
              <img src="./img/icons/share.svg" alt="share" />
            </div>
            {showComments && <CardComments post={post} />}
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
