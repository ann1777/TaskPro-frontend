export const getPriorityStyles = (priority, theme) => {
    let color = '';
    let labelText = '';
   

  switch (priority) {
       case 'low':
        color = '#8FA1D0';
        labelText = 'Low';
      break;
    case 'medium':
        color = '#E09CB5';
        labelText = 'Medium';
      break;
      case 'high':
        color = '#BEDBB0';
        labelText = 'High';
        break;
    case 'without':
        color = theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(22, 22, 22, 0.3)';
      labelText = 'Without';
        break;
      default:
        break;
    }
    return { color, labelText, };
  };