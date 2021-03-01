export default function Conversation(props) {

  // const submitForm = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.message.value);
  //   event.target.reset();
  // }

  return (
    <div className="formSection">
      <div className="avatarCell">
      <div className="avatar"><img src="../../../assets/Images/Mohan-muruge.jpg" alt="Avatar" /></div>
      </div>

      <div className="formCell">
      <div><h3>JOIN THE CONVERSATION</h3></div>
      
      <form onSubmit={props.submitHandler}>
      <textarea rows="5" name="message" placeholder="Type your comment here."></textarea>
      <input type="submit" value="COMMENT" />
      </form>
      </div>
    </div>
  )
}


