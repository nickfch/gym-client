export const formatDate = (date: Date): string => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (
    date.getTime() < tomorrow.getTime() &&
    date.getTime() >= today.getTime()
  ) {
    // Today
    return `Today at ${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  } else if (
    date.getTime() < new Date(tomorrow).setDate(tomorrow.getDate() + 1) &&
    date.getTime() >= tomorrow.getTime()
  ) {
    // Tomorrow
    return `Tomorrow at ${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  } else {
    // Other days
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleDateString('en-US', options);
  }
};
