import styles from './ui-shared.module.scss';

/* eslint-disable-next-line */
export interface UiSharedProps {}

export function UiShared(props: UiSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiShared!</h1>
    </div>
  );
}

export default UiShared;
