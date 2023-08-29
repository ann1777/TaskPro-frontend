export const getPriorityStyles = priority => {
    let color = '';
    let labelText = '';
   

    switch (priority) {
      case 'without':
            color = '#8FA1D0';
        labelText = 'Without';
        break;
      case 'low':
        color = '#E09CB5';
        labelText = 'Low';
        break;
      case 'medium':
        color = '#BEDBB0';
        labelText = 'Medium';
        break;
      case 'high':
        color = '#FFFFFF';
        labelText = 'High';
        break;
      default:
        break;
    }
    return { color, labelText, };
  };