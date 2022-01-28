export default function Comment(props) {
  return (
    <div>
      <div className="comment-text">Comment: {props.text}</div>
      <div className="Comment-date">Date: {props.date}</div>
    </div>
  );
}
