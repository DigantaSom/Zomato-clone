import NoSavedImg from 'src/images/collections/no-saved-collections-placeholder.png';

import './bookmarked-collections.styles.css';

const BookmarkedCollections = () => {
  const savedCollections = []; // TODO: fetch from backend

  return (
    <div>
      {savedCollections.length === 0 ? (
        <div className='bookmarked-collections__no-saved'>
          <img
            src={NoSavedImg}
            alt="Save collections you love! They'll appear here."
            className='bookmarked-collections__no-saved-img'
          />
          <div className='bookmarked-collections__no-saved-text'>
            Save collections you love!
            <br />
            They'll appear here.
          </div>
        </div>
      ) : (
        // TODO: display the saved collections during backend implementation
        <></>
      )}
    </div>
  );
};

export default BookmarkedCollections;
