import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const mockState = {
    notifications: {
      filter: 'default',
      list: [
        { id: 1, message: 'Notification 1', isRead: true },
        { id: 2, message: 'Notification 2', isRead: false },
        { id: 3, message: 'Notification 3', isRead: false }
      ]
    }
  };

  test('filterTypeSelected returns the correct filter', () => {
    const result = filterTypeSelected(mockState);
    expect(result).toBe('default');
  });

  test('getNotifications returns a Map of all notifications', () => {
    const result = getNotifications(mockState);
    expect(result).toBeInstanceOf(Map);
    expect(result.size).toBe(3);
    expect(result.get(1).message).toBe('Notification 1');
  });

  test('getUnreadNotifications returns a Map of unread notifications', () => {
    const result = getUnreadNotifications(mockState);
    expect(result).toBeInstanceOf(Map);
    expect(result.size).toBe(2);
    expect(result.get(2).message).toBe('Notification 2');
    expect(result.get(3).message).toBe('Notification 3');
  });
});
