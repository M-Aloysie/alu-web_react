export const filterTypeSelected = (state) => state.notifications.filter;

export const getNotifications = (state) => {
  const notifications = state.notifications.list || [];
  return new Map(notifications.map(notification => [notification.id, notification]));
};

export const getUnreadNotifications = (state) => {
  const notifications = state.notifications.list || [];
  const unreadNotifications = notifications.filter(notification => !notification.isRead);
  return new Map(unreadNotifications.map(notification => [notification.id, notification]));
};
