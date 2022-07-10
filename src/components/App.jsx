// export const API_KEY = 'ed9b8dd4dcf22d9d746c4e21c6321e97';
// export const API_BASE_URL = 'https://api.themoviedb.org/3';
// export const API_IMG_URL = 'https://image.tmdb.org/t/p/w500';

import { Component } from 'react';
import { fetchMovies } from 'Services/api';
import { Button } from './Button/Button';
import { mapper } from 'utils/mapper';
import { MovieGallery } from './MovieGallery/MovieGallery';
import { Modal } from './Modal/Modal';
export class App extends Component {
  state = {
    items: [],
    page: 1,
    isLoading: false,
    overview: '',
    // isShowen: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.getMovies(this.state.page);
    }
  }

  getMovies = page => {
    this.setState({ isLoading: true });
    fetchMovies(page)
      .then(data => {
        this.setState({ items: [...this.state.items, ...mapper(data)] });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  toggleWatched = id => {
    const watched = this.state.items.map(item => {
      if (item.id === id) {
        item.watched = !item.watched;
      }
      return item;
    });
    this.setState({ items: watched });
  };

  handleModal = overview => {
    this.setState({ overview });
  };

  handleCloseModal = () => {
    this.setState({ overview: '' });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        {items.length === 0 && (
          <Button
            caption="load movies"
            handleClick={() => this.getMovies(1)}
          ></Button>
        )}
        {items.length > 0 && (
          <>
            <MovieGallery
              movieList={items}
              handleWatched={this.toggleWatched}
              handleModal={this.handleModal}
            />
            <Button
              caption="load more"
              handleClick={this.handleLoadMore}
            ></Button>
            {this.state.overview !== '' && (
              <Modal
                overview={this.state.overview}
                onCloseModal={this.handleCloseModal}
              />
            )}
          </>
        )}
      </div>
    );
  }
}
