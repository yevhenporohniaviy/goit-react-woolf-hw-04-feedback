const FeedbackOptions = ({ options, onLeaveFeedback, onResetFeedback }) => {
  const existReset = Object.values(options).some(option => !!option);

  return (
    <>
      {Object.keys(options).map(option => (
        <button
          key={option}
          style={{ margin: 5 }}
          onClick={() => onLeaveFeedback(option)}
        >
          <strong style={{ textTransform: 'capitalize' }}>{option}</strong>
        </button>
      ))}
      {existReset && (
        <button onClick={onResetFeedback} style={{ margin: 5 }}>
          <strong>Reset</strong>
        </button>
      )}
    </>
  );
}
 
export default FeedbackOptions;