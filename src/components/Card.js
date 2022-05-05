
function Card({firstName, lastName, post, avatar}){
  return(
    <div className="block">
      <img height={58} width={58} className="block__avatar" src={avatar} alt="avatar" />
      <div className="block-info">
        <h3 className="block-info__name">{firstName}  {lastName}</h3>
        <p className="block-info__post">{post}</p>
      </div>
    </div>
  );
}

export default Card;