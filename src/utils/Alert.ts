import { createToastFn, UseToastOptions } from '@chakra-ui/react';
import { capitalizeFirstLetter } from '.';

interface IAlert extends UseToastOptions {
  message: string;
}

function applyDefaults(status: UseToastOptions['status'], options: IAlert) {
  options.title = options.title || capitalizeFirstLetter(status || 'info');
  options.id = options.id || `${status}-${options.message}`;
  options.status = status;
  return options;
}

class Alert {
  public static success(options: IAlert) {
    return this.show(applyDefaults('success', options));
  }

  public static error(options: IAlert) {
    return this.show(applyDefaults('error', options));
  }

  public static info(options: IAlert) {
    return this.show(applyDefaults('info', options));
  }

  public static warning(options: IAlert) {
    return this.show(applyDefaults('warning', options));
  }

  public static close(id?: string) {
    id ? this.toast.close(id) : this.toast.closeAll();
  }

  private static toast = createToastFn('ltr', {
    position: 'top-right',
    duration: 8000,
    variant: 'left-accent',
    containerStyle: {},
    isClosable: true
  });

  public static show(options: Partial<IAlert>) {
    options.description = options.description || options.message;
    delete options.message;
    if (options.id && this.toast.isActive(options.id)) {
      const { id, ...rest } = options;
      return this.toast.update(id, rest);
    }
    this.toast(options);
  }
}

export default Alert;
