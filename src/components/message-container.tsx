import './message-container.css';

const MessageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='message-container'>{children}</div>
  );
};

export default MessageContainer;
