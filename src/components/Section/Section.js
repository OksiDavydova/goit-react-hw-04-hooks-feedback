import PropTypes from 'prop-types';
import s from './Section.module.css';

export function Section({ title, children }) {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.defaultProps = {
  title: 'Please leave feedback',
};

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
