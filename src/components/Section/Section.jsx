import PropTypes from 'prop-types';
import styles from './Section.module.css';

function Section(props) {
  return (
    <>
      <h2 className={styles.title}>{props.title}</h2>
      <div>{props.children}</div>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
