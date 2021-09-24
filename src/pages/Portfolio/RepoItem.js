import PropTypes from 'prop-types';
import {
  Description, Language, RepoCard, RepoCardTitle,
} from './style';

export default function RepoItem({ dataItemRepo }) {
  return (
    <RepoCard>
      <RepoCardTitle>
        <a href={dataItemRepo.url} target="_blank" rel="noopener noreferrer">
          {dataItemRepo.name}
          <i className="fas fa-external-link-alt" />
        </a>
      </RepoCardTitle>
      <Description>{dataItemRepo.description}</Description>
      <Language>{dataItemRepo.language}</Language>
    </RepoCard>
  );
}

RepoItem.propTypes = {
  dataItemRepo: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
