import styled from "styled-components";

export const AboutStyles = styled.div`
  .about {
    height: 90rem;
  }

  .about-image {
    width: 40%;
    height: 58rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10rem;
      height: 10rem;
      border-top: 3px solid var(--primary-color);
      border-left: 3px solid var(--primary-color);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10rem;
      height: 10rem;
      border-bottom: 3px solid var(--primary-color);
      border-right: 3px solid var(--primary-color);
    }

    &__avatar {
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
      object-fit: cover;
    }
  }

  .about-content {
    width: 60%;
    padding-left: 9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .heading {
      &__description {
        font-size: 2rem;
        font-weight: 300;
      }
    }

    .contact {
      font-size: 2rem;
      margin: 4rem 0;

      &__table {
        width: 100%;
      }

      &__icon {
        font-size: 2.5rem;
        color: var(--primary-color);

        i {
          transition: all 0.25s linear;
        }

        &:hover {
          i {
            transform: scale(1.3) skew(10deg);
          }
        }
      }

      &__topic {
        width: 6rem;
        font-weight: bold;
        padding: 1rem 9rem 1rem 0;
      }

      &__description {
        padding-left: 4.5rem;
      }
    }

    .interests {
      color: var(--secondary-color);

      &__title {
        font-size: 3rem;
        margin-bottom: 2rem;
        font-weight: 800;
      }

      &__list {
        font-size: 2rem;
        display: flex;
        justify-content: space-between;
      }

      &__item {
        i {
          transition: all 0.25s linear;
        }

        &:hover {
          i {
            transform: scale(1.3) skew(-5deg);
          }
        }
      }

      &__icon {
        font-size: 4rem;
        color: var(--primary-color);
        margin-right: 1.5rem;
      }
      &__text {
        font-weight: bold;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .about {
      height: 75rem;
    }
    .about-image {
      height: 50rem;
    }

    .about-content {
      .heading {
        &__description {
          font-size: 1.5rem;
        }
      }
      .contact {
        font-size: 1.5rem;
        margin: 2rem 0;

        &__icon {
          font-size: 2rem;
        }

        &__topic {
          padding: 1rem 0 1rem 0;
        }
      }

      .interests {
        &__icon {
          font-size: 3rem;
          margin-right: 0.5rem;
        }

        &__text {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .about {
      height: 75rem;
    }
    .about-image {
      height: 40rem;
    }

    .about-content {
      .heading {
        &__description {
          font-size: 1rem;
        }
      }
      .contact {
        font-size: 1rem;
        margin: 1rem 0;

        &__icon {
          font-size: 1.5rem;
        }

        &__topic {
          padding: 1rem 0 1rem 0;
        }
      }

      .interests {
        &__title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        &__icon {
          font-size: 2rem;
          margin-right: 0.5rem;
        }

        &__text {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 374px) {
    .about {
      height: 40rem;
    }
    .about-image {
      height: 20rem;
    }

    .about-content {
      padding-left: 2rem;

      .heading {
        &__description {
          font-size: 0.75rem;
        }
      }
      .contact {
        font-size: 0.75rem;

        &__icon {
          font-size: 1rem;
        }

        &__description {
          padding-left: 1rem;
        }

        &__topic {
          width: 3rem;
          padding: 0.5rem 0;
        }
      }

      .interests {
        &__title {
          font-size: 1.5rem;
        }

        &__icon {
          font-size: 1.5rem;
        }

        &__text {
          font-size: 0.75rem;
        }
      }
    }
  }
`;
