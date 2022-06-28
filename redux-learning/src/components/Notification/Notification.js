import { NotificationWrapper } from "./Notification.styles";

const Notification = ({status, title, message}) => {

  const showMessage = status ? (
    <NotificationWrapper status={status}>
      <h1>{title}</h1>
      <h2>{message}</h2>
    </NotificationWrapper>
  ) : null;
  return showMessage;
};
export default Notification;
