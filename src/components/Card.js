
function Card({firstName, lastName, post}){
  return(
    <div className="block">
      <img className="block__avatar" src="/img/employee-avatar.png" alt="avatar" />
      <div className="block-info">
        <h3 className="block-info__name">{firstName}  {lastName}</h3>
        <p className="block-info__post">{post}</p>
      </div>
    </div>
  );
}

export default Card;