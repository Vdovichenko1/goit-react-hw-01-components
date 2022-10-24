import PropTypes from 'prop-types';
import { StatisticsCss, Title, StatList, Item, Label, Percentage } from "./Statistics.styled";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsCss>
            {title && <Title>{title}</Title>}
  <StatList>
    {stats.map(stat => (<Item key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
      <Label>{stat.label}</Label>
      <Percentage>{stat.percentage}%</Percentage>
    </Item>))}
  </StatList>
</StatisticsCss>
    )
}

Statistics.propTypes = {
  stat: PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
  })
}
