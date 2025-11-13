import './Toast.scss';

export interface ToastProps {
  text: string;
  type?: 'error' | 'info';
}

export const Toast = ({ text, type = 'info' }: ToastProps) => {
  return (
    <div role="status" aria-live="polite" className={`Toast Toast--${type}`}>
      {text}
    </div>
  );
};
