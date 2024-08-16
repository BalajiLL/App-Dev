import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import './Comments.css'
const Comments = (props) => {
  // Fallback to 0 likes if `cmt` or `cmt.likes` is undefined
  const [booleonLike, setBooleonLike] = useState(false);
  const [likeCount, setLikeCount] = useState(props.cmt?.likes || 0);

  if (!props.cmt) {
    return <div>No comment data available.</div>; // Show a fallback UI if `cmt` is undefined
  }

  return (
    <div className="overAllCommentList">
      <div className="commentList">
        <div className='commentList1'>
          <div className="commentHead">
            <div>
              <img src={props.cmt.profilePic} alt={`${props.cmt.username}'s profile`} />
            </div>
            <p>
              <span>{props.cmt.username}</span> {props.cmt.comment}
            </p>
          </div>

          <div className="commentFooter">
            <p>{props.cmt.time}</p>
            <h4>{booleonLike ? likeCount + 1 : likeCount} likes</h4>
          </div>
        </div>

        <div className="commentList2">
          <p 
            className='cp'
            onClick={() => setBooleonLike(!booleonLike)}
            style={{ cursor: "pointer" }}
          >
            {booleonLike ? <FavoriteRoundedIcon /> : <FavoriteBorderOutlinedIcon />}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
