import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats?.length > 0
          ? stats.map(stat => (
              <li className={s.item} key={stat.id}>
                <span className={s.label}>{stat.label}</span>
                <span className={s.percentage}>{stat.percentage}%</span>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
