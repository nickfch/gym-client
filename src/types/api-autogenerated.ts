/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
  data?: object | object[] | null;
  error: {
    status?: number;
    name?: string;
    message?: string;
    details?: object;
  };
}

export interface AboutRequest {
  data: {
    title?: string;
    blocks?: BaseNull &
      (
        | BaseNullComponentMapping<'shared.media', SharedMediaComponent>
        | BaseNullComponentMapping<'shared.quote', SharedQuoteComponent>
        | BaseNullComponentMapping<'shared.rich-text', SharedRichTextComponent>
        | BaseNullComponentMapping<'shared.slider', SharedSliderComponent>
      );
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface AboutListResponse {
  data?: About[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface About {
  id?: number;
  documentId?: string;
  title?: string;
  blocks?: AbstractNull &
    (
      | AbstractNullComponentMapping<'shared.media', SharedMediaComponent>
      | AbstractNullComponentMapping<'shared.quote', SharedQuoteComponent>
      | AbstractNullComponentMapping<
          'shared.rich-text',
          SharedRichTextComponent
        >
      | AbstractNullComponentMapping<'shared.slider', SharedSliderComponent>
    );
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    title?: string;
    blocks?: DiscriminatorNull &
      (
        | DiscriminatorNullComponentMapping<
            'shared.media',
            SharedMediaComponent
          >
        | DiscriminatorNullComponentMapping<
            'shared.quote',
            SharedQuoteComponent
          >
        | DiscriminatorNullComponentMapping<
            'shared.rich-text',
            SharedRichTextComponent
          >
        | DiscriminatorNullComponentMapping<
            'shared.slider',
            SharedSliderComponent
          >
      );
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface AboutResponse {
  data?: About;
  meta?: object;
}

export interface SharedMediaComponent {
  id?: number;
  __component?: SharedMediaComponentComponentEnum;
  file?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
}

export interface SharedQuoteComponent {
  id?: number;
  __component?: SharedQuoteComponentComponentEnum;
  title?: string;
  body?: string;
}

export interface SharedRichTextComponent {
  id?: number;
  __component?: SharedRichTextComponentComponentEnum;
  body?: string;
}

export interface SharedSliderComponent {
  id?: number;
  __component?: SharedSliderComponentComponentEnum;
  files?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface ArticleRequest {
  data: {
    title?: string;
    description?: string;
    slug?: string;
    /** @example "string or id" */
    cover?: number | string;
    blocks?: InternalNull &
      (
        | InternalNullComponentMapping<'shared.media', SharedMediaComponent>
        | InternalNullComponentMapping<'shared.quote', SharedQuoteComponent>
        | InternalNullComponentMapping<
            'shared.rich-text',
            SharedRichTextComponent
          >
        | InternalNullComponentMapping<'shared.slider', SharedSliderComponent>
      );
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface ArticleListResponse {
  data?: Article[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Article {
  id?: number;
  documentId?: string;
  title?: string;
  description?: string;
  slug?: string;
  cover?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
      name?: string;
      pathId?: number;
      parent?: {
        id?: number;
        documentId?: string;
      };
      children?: {
        id?: number;
        documentId?: string;
      }[];
      files?: {
        id?: number;
        documentId?: string;
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          id?: number;
          documentId?: string;
        }[];
        folder?: {
          id?: number;
          documentId?: string;
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            id?: number;
            documentId?: string;
            name?: string;
            code?: string;
            description?: string;
            users?: {
              id?: number;
              documentId?: string;
            }[];
            permissions?: {
              id?: number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: number;
                documentId?: string;
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      path?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  blocks?: PolymorphNull &
    (
      | PolymorphNullComponentMapping<'shared.media', SharedMediaComponent>
      | PolymorphNullComponentMapping<'shared.quote', SharedQuoteComponent>
      | PolymorphNullComponentMapping<
          'shared.rich-text',
          SharedRichTextComponent
        >
      | PolymorphNullComponentMapping<'shared.slider', SharedSliderComponent>
    );
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    title?: string;
    description?: string;
    slug?: string;
    cover?: {
      id?: number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      /** @format float */
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: {
        id?: number;
        documentId?: string;
      }[];
      folder?: {
        id?: number;
        documentId?: string;
      };
      folderPath?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    blocks?: DiscriminatorNull1 &
      (
        | DiscriminatorNull1ComponentMapping<
            'shared.media',
            SharedMediaComponent
          >
        | DiscriminatorNull1ComponentMapping<
            'shared.quote',
            SharedQuoteComponent
          >
        | DiscriminatorNull1ComponentMapping<
            'shared.rich-text',
            SharedRichTextComponent
          >
        | DiscriminatorNull1ComponentMapping<
            'shared.slider',
            SharedSliderComponent
          >
      );
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface ArticleResponse {
  data?: Article;
  meta?: object;
}

export interface ExerciseRequest {
  data: {
    name: string;
    category: ExerciseRequestCategoryEnum;
    sets?: number;
    muscle_group: ExerciseRequestMuscleGroupEnum;
    description: string;
    equipment?: ExerciseRequestEquipmentEnum;
    rest_time?: number;
    workouts?: (number | string)[];
    /** @example "string or id" */
    video_example?: number | string;
    tips?: any;
    steps?: string;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface ExerciseListResponse {
  data?: Exercise[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Exercise {
  id?: number;
  documentId?: string;
  name: string;
  category: ExerciseCategoryEnum;
  sets?: number;
  muscle_group: ExerciseMuscleGroupEnum;
  description: string;
  equipment?: ExerciseEquipmentEnum;
  rest_time?: number;
  workouts?: {
    id?: number;
    documentId?: string;
    name?: string;
    duration?: number;
    description?: string;
    difficulty?: number;
    exercises?: {
      id?: number;
      documentId?: string;
      name?: string;
      category?: ExerciseCategoryEnum1;
      sets?: number;
      muscle_group?: ExerciseMuscleGroupEnum1;
      description?: string;
      equipment?: ExerciseEquipmentEnum1;
      rest_time?: number;
      workouts?: {
        id?: number;
        documentId?: string;
      }[];
      video_example?: {
        id?: number;
        documentId?: string;
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          id?: number;
          documentId?: string;
        }[];
        folder?: {
          id?: number;
          documentId?: string;
          name?: string;
          pathId?: number;
          parent?: {
            id?: number;
            documentId?: string;
          };
          children?: {
            id?: number;
            documentId?: string;
          }[];
          files?: {
            id?: number;
            documentId?: string;
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            /** @format float */
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              id?: number;
              documentId?: string;
            }[];
            folder?: {
              id?: number;
              documentId?: string;
            };
            folderPath?: string;
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
              firstname?: string;
              lastname?: string;
              username?: string;
              /** @format email */
              email?: string;
              resetPasswordToken?: string;
              registrationToken?: string;
              isActive?: boolean;
              roles?: {
                id?: number;
                documentId?: string;
                name?: string;
                code?: string;
                description?: string;
                users?: {
                  id?: number;
                  documentId?: string;
                }[];
                permissions?: {
                  id?: number;
                  documentId?: string;
                  action?: string;
                  actionParameters?: any;
                  subject?: string;
                  properties?: any;
                  conditions?: any;
                  role?: {
                    id?: number;
                    documentId?: string;
                  };
                  /** @format date-time */
                  createdAt?: string;
                  /** @format date-time */
                  updatedAt?: string;
                  /** @format date-time */
                  publishedAt?: string;
                  createdBy?: {
                    id?: number;
                    documentId?: string;
                  };
                  updatedBy?: {
                    id?: number;
                    documentId?: string;
                  };
                  locale?: string;
                  localizations?: {
                    id?: number;
                    documentId?: string;
                  }[];
                }[];
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                /** @format date-time */
                publishedAt?: string;
                createdBy?: {
                  id?: number;
                  documentId?: string;
                };
                updatedBy?: {
                  id?: number;
                  documentId?: string;
                };
                locale?: string;
                localizations?: {
                  id?: number;
                  documentId?: string;
                }[];
              }[];
              blocked?: boolean;
              preferedLanguage?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          path?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      };
      tips?: any;
      steps?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    type?: ExerciseTypeEnum;
    user_workouts?: {
      id?: number;
      documentId?: string;
      /** @format date */
      date?: string;
      completed?: boolean;
      users?: {
        id?: number;
        documentId?: string;
        username?: string;
        /** @format email */
        email?: string;
        provider?: string;
        resetPasswordToken?: string;
        confirmationToken?: string;
        confirmed?: boolean;
        blocked?: boolean;
        role?: {
          id?: number;
          documentId?: string;
          name?: string;
          description?: string;
          type?: string;
          permissions?: {
            id?: number;
            documentId?: string;
            action?: string;
            role?: {
              id?: number;
              documentId?: string;
            };
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          users?: {
            id?: number;
            documentId?: string;
          }[];
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        user_workouts?: {
          id?: number;
          documentId?: string;
        }[];
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      };
      workout?: {
        id?: number;
        documentId?: string;
      };
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
  video_example?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  tips?: any;
  steps?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface ExerciseResponse {
  data?: Exercise;
  meta?: object;
}

export interface GlobalRequest {
  data: {
    siteName: string;
    /** @example "string or id" */
    favicon?: number | string;
    siteDescription: string;
    defaultSeo?: SharedSeoComponent;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface GlobalListResponse {
  data?: Global[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Global {
  id?: number;
  documentId?: string;
  siteName: string;
  favicon?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
      name?: string;
      pathId?: number;
      parent?: {
        id?: number;
        documentId?: string;
      };
      children?: {
        id?: number;
        documentId?: string;
      }[];
      files?: {
        id?: number;
        documentId?: string;
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          id?: number;
          documentId?: string;
        }[];
        folder?: {
          id?: number;
          documentId?: string;
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            id?: number;
            documentId?: string;
            name?: string;
            code?: string;
            description?: string;
            users?: {
              id?: number;
              documentId?: string;
            }[];
            permissions?: {
              id?: number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: number;
                documentId?: string;
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      path?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  siteDescription: string;
  defaultSeo?: SharedSeoComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    siteName?: string;
    favicon?: {
      id?: number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      /** @format float */
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: {
        id?: number;
        documentId?: string;
      }[];
      folder?: {
        id?: number;
        documentId?: string;
      };
      folderPath?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    siteDescription?: string;
    defaultSeo?: SharedSeoComponent;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface GlobalResponse {
  data?: Global;
  meta?: object;
}

export interface SharedSeoComponent {
  id?: number;
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
}

export interface UserWorkoutRequest {
  data: {
    /** @format date */
    date?: string;
    completed?: boolean;
    /** @example "string or id" */
    users?: number | string;
    /** @example "string or id" */
    workout?: number | string;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface UserWorkoutListResponse {
  data?: UserWorkout[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface UserWorkout {
  id?: number;
  documentId?: string;
  /** @format date */
  date?: string;
  completed?: boolean;
  users?: {
    id?: number;
    documentId?: string;
    username?: string;
    /** @format email */
    email?: string;
    provider?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: {
      id?: number;
      documentId?: string;
      name?: string;
      description?: string;
      type?: string;
      permissions?: {
        id?: number;
        documentId?: string;
        action?: string;
        role?: {
          id?: number;
          documentId?: string;
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            id?: number;
            documentId?: string;
            name?: string;
            code?: string;
            description?: string;
            users?: {
              id?: number;
              documentId?: string;
            }[];
            permissions?: {
              id?: number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: number;
                documentId?: string;
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      users?: {
        id?: number;
        documentId?: string;
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    user_workouts?: {
      id?: number;
      documentId?: string;
      /** @format date */
      date?: string;
      completed?: boolean;
      users?: {
        id?: number;
        documentId?: string;
      };
      workout?: {
        id?: number;
        documentId?: string;
        name?: string;
        duration?: number;
        description?: string;
        difficulty?: number;
        exercises?: {
          id?: number;
          documentId?: string;
          name?: string;
          category?: UserWorkoutCategoryEnum;
          sets?: number;
          muscle_group?: UserWorkoutMuscleGroupEnum;
          description?: string;
          equipment?: UserWorkoutEquipmentEnum;
          rest_time?: number;
          workouts?: {
            id?: number;
            documentId?: string;
          }[];
          video_example?: {
            id?: number;
            documentId?: string;
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            /** @format float */
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              id?: number;
              documentId?: string;
            }[];
            folder?: {
              id?: number;
              documentId?: string;
              name?: string;
              pathId?: number;
              parent?: {
                id?: number;
                documentId?: string;
              };
              children?: {
                id?: number;
                documentId?: string;
              }[];
              files?: {
                id?: number;
                documentId?: string;
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                /** @format float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  id?: number;
                  documentId?: string;
                }[];
                folder?: {
                  id?: number;
                  documentId?: string;
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                /** @format date-time */
                publishedAt?: string;
                createdBy?: {
                  id?: number;
                  documentId?: string;
                };
                updatedBy?: {
                  id?: number;
                  documentId?: string;
                };
                locale?: string;
                localizations?: {
                  id?: number;
                  documentId?: string;
                }[];
              }[];
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            };
            folderPath?: string;
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          tips?: any;
          steps?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        }[];
        type?: UserWorkoutTypeEnum;
        user_workouts?: {
          id?: number;
          documentId?: string;
        }[];
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      };
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  workout?: {
    id?: number;
    documentId?: string;
  };
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface UserWorkoutResponse {
  data?: UserWorkout;
  meta?: object;
}

export interface WorkoutRequest {
  data: {
    name: string;
    duration: number;
    description: string;
    difficulty: number;
    exercises?: (number | string)[];
    type: WorkoutRequestTypeEnum;
    user_workouts?: (number | string)[];
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface WorkoutListResponse {
  data?: Workout[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Workout {
  id?: number;
  documentId?: string;
  name: string;
  duration: number;
  description: string;
  difficulty: number;
  exercises?: {
    id?: number;
    documentId?: string;
    name?: string;
    category?: WorkoutCategoryEnum;
    sets?: number;
    muscle_group?: WorkoutMuscleGroupEnum;
    description?: string;
    equipment?: WorkoutEquipmentEnum;
    rest_time?: number;
    workouts?: {
      id?: number;
      documentId?: string;
      name?: string;
      duration?: number;
      description?: string;
      difficulty?: number;
      exercises?: {
        id?: number;
        documentId?: string;
      }[];
      type?: WorkoutTypeEnum;
      user_workouts?: {
        id?: number;
        documentId?: string;
        /** @format date */
        date?: string;
        completed?: boolean;
        users?: {
          id?: number;
          documentId?: string;
          username?: string;
          /** @format email */
          email?: string;
          provider?: string;
          resetPasswordToken?: string;
          confirmationToken?: string;
          confirmed?: boolean;
          blocked?: boolean;
          role?: {
            id?: number;
            documentId?: string;
            name?: string;
            description?: string;
            type?: string;
            permissions?: {
              id?: number;
              documentId?: string;
              action?: string;
              role?: {
                id?: number;
                documentId?: string;
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
                firstname?: string;
                lastname?: string;
                username?: string;
                /** @format email */
                email?: string;
                resetPasswordToken?: string;
                registrationToken?: string;
                isActive?: boolean;
                roles?: {
                  id?: number;
                  documentId?: string;
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    id?: number;
                    documentId?: string;
                  }[];
                  permissions?: {
                    id?: number;
                    documentId?: string;
                    action?: string;
                    actionParameters?: any;
                    subject?: string;
                    properties?: any;
                    conditions?: any;
                    role?: {
                      id?: number;
                      documentId?: string;
                    };
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    /** @format date-time */
                    publishedAt?: string;
                    createdBy?: {
                      id?: number;
                      documentId?: string;
                    };
                    updatedBy?: {
                      id?: number;
                      documentId?: string;
                    };
                    locale?: string;
                    localizations?: {
                      id?: number;
                      documentId?: string;
                    }[];
                  }[];
                  /** @format date-time */
                  createdAt?: string;
                  /** @format date-time */
                  updatedAt?: string;
                  /** @format date-time */
                  publishedAt?: string;
                  createdBy?: {
                    id?: number;
                    documentId?: string;
                  };
                  updatedBy?: {
                    id?: number;
                    documentId?: string;
                  };
                  locale?: string;
                  localizations?: {
                    id?: number;
                    documentId?: string;
                  }[];
                }[];
                blocked?: boolean;
                preferedLanguage?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                /** @format date-time */
                publishedAt?: string;
                createdBy?: {
                  id?: number;
                  documentId?: string;
                };
                updatedBy?: {
                  id?: number;
                  documentId?: string;
                };
                locale?: string;
                localizations?: {
                  id?: number;
                  documentId?: string;
                }[];
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            users?: {
              id?: number;
              documentId?: string;
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          user_workouts?: {
            id?: number;
            documentId?: string;
          }[];
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        workout?: {
          id?: number;
          documentId?: string;
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    video_example?: {
      id?: number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      /** @format float */
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: {
        id?: number;
        documentId?: string;
      }[];
      folder?: {
        id?: number;
        documentId?: string;
        name?: string;
        pathId?: number;
        parent?: {
          id?: number;
          documentId?: string;
        };
        children?: {
          id?: number;
          documentId?: string;
        }[];
        files?: {
          id?: number;
          documentId?: string;
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            id?: number;
            documentId?: string;
          }[];
          folder?: {
            id?: number;
            documentId?: string;
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        }[];
        path?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      };
      folderPath?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    tips?: any;
    steps?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
  type: WorkoutTypeEnum1;
  user_workouts?: {
    id?: number;
    documentId?: string;
  }[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface WorkoutResponse {
  data?: Workout;
  meta?: object;
}

export interface UploadFile {
  id?: number;
  name?: string;
  alternativeText?: string;
  caption?: string;
  /** @format integer */
  width?: number;
  /** @format integer */
  height?: number;
  formats?: number;
  hash?: string;
  ext?: string;
  mime?: string;
  /** @format double */
  size?: number;
  url?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: object;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface UsersPermissionsRole {
  id?: number;
  name?: string;
  description?: string;
  type?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface UsersPermissionsUser {
  /** @example 1 */
  id?: number;
  /** @example "foo.bar" */
  username?: string;
  /** @example "foo.bar@strapi.io" */
  email?: string;
  /** @example "local" */
  provider?: string;
  /** @example true */
  confirmed?: boolean;
  /** @example false */
  blocked?: boolean;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.258Z"
   */
  createdAt?: string;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.267Z"
   */
  updatedAt?: string;
}

export interface UsersPermissionsUserRegistration {
  /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
  jwt?: string;
  user?: UsersPermissionsUser;
}

export type UsersPermissionsPermissionsTree = Record<
  string,
  {
    /** every controller of the api */
    controllers?: Record<
      string,
      Record<
        string,
        {
          enabled?: boolean;
          policy?: string;
        }
      >
    >;
  }
>;

type BaseNull = (
  | SharedMediaComponent
  | SharedQuoteComponent
  | SharedRichTextComponent
  | SharedSliderComponent
)[];

type BaseNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type AbstractNull = (
  | SharedMediaComponent
  | SharedQuoteComponent
  | SharedRichTextComponent
  | SharedSliderComponent
)[];

type AbstractNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type DiscriminatorNull = (
  | SharedMediaComponent
  | SharedQuoteComponent
  | SharedRichTextComponent
  | SharedSliderComponent
)[];

type DiscriminatorNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

export type SharedMediaComponentComponentEnum = 'shared.media';

export type SharedQuoteComponentComponentEnum = 'shared.quote';

export type SharedRichTextComponentComponentEnum = 'shared.rich-text';

export type SharedSliderComponentComponentEnum = 'shared.slider';

type InternalNull = (
  | SharedMediaComponent
  | SharedQuoteComponent
  | SharedRichTextComponent
  | SharedSliderComponent
)[];

type InternalNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type PolymorphNull = (
  | SharedMediaComponent
  | SharedQuoteComponent
  | SharedRichTextComponent
  | SharedSliderComponent
)[];

type PolymorphNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type DiscriminatorNull1 = (
  | SharedMediaComponent
  | SharedQuoteComponent
  | SharedRichTextComponent
  | SharedSliderComponent
)[];

type DiscriminatorNull1ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

export type ExerciseRequestCategoryEnum =
  | 'Strength'
  | 'Cardio'
  | 'Flexibility'
  | 'Balance'
  | 'Endurance'
  | 'Power'
  | 'Speed'
  | 'Agility'
  | 'Mobility'
  | 'Recovery';

export type ExerciseRequestMuscleGroupEnum =
  | 'Chest'
  | 'Back'
  | 'Shoulders'
  | 'Biceps'
  | 'Triceps'
  | 'Forearms'
  | 'Abs'
  | 'Obliques'
  | 'Glutes'
  | 'Quadriceps'
  | 'Hamstrings'
  | 'Calves'
  | 'Traps'
  | 'Lats'
  | 'Lower Back'
  | 'Hip Flexors';

export type ExerciseRequestEquipmentEnum =
  | 'Treadmill'
  | 'Elliptical Trainer'
  | 'Stationary Bike'
  | 'Rowing Machine'
  | 'Stair Climber'
  | 'Dumbbells'
  | 'Barbells'
  | 'Kettlebells'
  | 'Weight Plates'
  | 'Resistance Bands'
  | 'Medicine Ball'
  | 'Slam Ball'
  | 'Sandbag'
  | 'Battle Ropes'
  | 'Jump Rope'
  | 'Pull-up Bar'
  | 'Dip Station'
  | 'Power Rack'
  | 'Squat Rack'
  | 'Smith Machine'
  | 'Bench Press'
  | 'Adjustable Bench'
  | 'Leg Press Machine'
  | 'Hack Squat Machine'
  | 'Cable Machine'
  | 'Lat Pulldown Machine'
  | 'Seated Row Machine'
  | 'Chest Press Machine'
  | 'Shoulder Press Machine'
  | 'Leg Curl Machine'
  | 'Leg Extension Machine'
  | 'Calf Raise Machine'
  | 'Ab Roller'
  | 'Hyperextension Bench'
  | 'Punching Bag'
  | 'Speed Bag'
  | 'Plyometric Box'
  | 'TRX Suspension Trainer'
  | 'Foam Roller'
  | 'Yoga Mat'
  | 'No Need';

export type ExerciseCategoryEnum =
  | 'Strength'
  | 'Cardio'
  | 'Flexibility'
  | 'Balance'
  | 'Endurance'
  | 'Power'
  | 'Speed'
  | 'Agility'
  | 'Mobility'
  | 'Recovery';

export type ExerciseMuscleGroupEnum =
  | 'Chest'
  | 'Back'
  | 'Shoulders'
  | 'Biceps'
  | 'Triceps'
  | 'Forearms'
  | 'Abs'
  | 'Obliques'
  | 'Glutes'
  | 'Quadriceps'
  | 'Hamstrings'
  | 'Calves'
  | 'Traps'
  | 'Lats'
  | 'Lower Back'
  | 'Hip Flexors';

export type ExerciseEquipmentEnum =
  | 'Treadmill'
  | 'Elliptical Trainer'
  | 'Stationary Bike'
  | 'Rowing Machine'
  | 'Stair Climber'
  | 'Dumbbells'
  | 'Barbells'
  | 'Kettlebells'
  | 'Weight Plates'
  | 'Resistance Bands'
  | 'Medicine Ball'
  | 'Slam Ball'
  | 'Sandbag'
  | 'Battle Ropes'
  | 'Jump Rope'
  | 'Pull-up Bar'
  | 'Dip Station'
  | 'Power Rack'
  | 'Squat Rack'
  | 'Smith Machine'
  | 'Bench Press'
  | 'Adjustable Bench'
  | 'Leg Press Machine'
  | 'Hack Squat Machine'
  | 'Cable Machine'
  | 'Lat Pulldown Machine'
  | 'Seated Row Machine'
  | 'Chest Press Machine'
  | 'Shoulder Press Machine'
  | 'Leg Curl Machine'
  | 'Leg Extension Machine'
  | 'Calf Raise Machine'
  | 'Ab Roller'
  | 'Hyperextension Bench'
  | 'Punching Bag'
  | 'Speed Bag'
  | 'Plyometric Box'
  | 'TRX Suspension Trainer'
  | 'Foam Roller'
  | 'Yoga Mat'
  | 'No Need';

export type ExerciseCategoryEnum1 =
  | 'Strength'
  | 'Cardio'
  | 'Flexibility'
  | 'Balance'
  | 'Endurance'
  | 'Power'
  | 'Speed'
  | 'Agility'
  | 'Mobility'
  | 'Recovery';

export type ExerciseMuscleGroupEnum1 =
  | 'Chest'
  | 'Back'
  | 'Shoulders'
  | 'Biceps'
  | 'Triceps'
  | 'Forearms'
  | 'Abs'
  | 'Obliques'
  | 'Glutes'
  | 'Quadriceps'
  | 'Hamstrings'
  | 'Calves'
  | 'Traps'
  | 'Lats'
  | 'Lower Back'
  | 'Hip Flexors';

export type ExerciseEquipmentEnum1 =
  | 'Treadmill'
  | 'Elliptical Trainer'
  | 'Stationary Bike'
  | 'Rowing Machine'
  | 'Stair Climber'
  | 'Dumbbells'
  | 'Barbells'
  | 'Kettlebells'
  | 'Weight Plates'
  | 'Resistance Bands'
  | 'Medicine Ball'
  | 'Slam Ball'
  | 'Sandbag'
  | 'Battle Ropes'
  | 'Jump Rope'
  | 'Pull-up Bar'
  | 'Dip Station'
  | 'Power Rack'
  | 'Squat Rack'
  | 'Smith Machine'
  | 'Bench Press'
  | 'Adjustable Bench'
  | 'Leg Press Machine'
  | 'Hack Squat Machine'
  | 'Cable Machine'
  | 'Lat Pulldown Machine'
  | 'Seated Row Machine'
  | 'Chest Press Machine'
  | 'Shoulder Press Machine'
  | 'Leg Curl Machine'
  | 'Leg Extension Machine'
  | 'Calf Raise Machine'
  | 'Ab Roller'
  | 'Hyperextension Bench'
  | 'Punching Bag'
  | 'Speed Bag'
  | 'Plyometric Box'
  | 'TRX Suspension Trainer'
  | 'Foam Roller'
  | 'Yoga Mat'
  | 'No Need';

export type ExerciseTypeEnum =
  | 'Upper Body'
  | 'Lower Body'
  | 'Core'
  | 'Full-Body'
  | 'Cardio';

export type UserWorkoutCategoryEnum =
  | 'Strength'
  | 'Cardio'
  | 'Flexibility'
  | 'Balance'
  | 'Endurance'
  | 'Power'
  | 'Speed'
  | 'Agility'
  | 'Mobility'
  | 'Recovery';

export type UserWorkoutMuscleGroupEnum =
  | 'Chest'
  | 'Back'
  | 'Shoulders'
  | 'Biceps'
  | 'Triceps'
  | 'Forearms'
  | 'Abs'
  | 'Obliques'
  | 'Glutes'
  | 'Quadriceps'
  | 'Hamstrings'
  | 'Calves'
  | 'Traps'
  | 'Lats'
  | 'Lower Back'
  | 'Hip Flexors';

export type UserWorkoutEquipmentEnum =
  | 'Treadmill'
  | 'Elliptical Trainer'
  | 'Stationary Bike'
  | 'Rowing Machine'
  | 'Stair Climber'
  | 'Dumbbells'
  | 'Barbells'
  | 'Kettlebells'
  | 'Weight Plates'
  | 'Resistance Bands'
  | 'Medicine Ball'
  | 'Slam Ball'
  | 'Sandbag'
  | 'Battle Ropes'
  | 'Jump Rope'
  | 'Pull-up Bar'
  | 'Dip Station'
  | 'Power Rack'
  | 'Squat Rack'
  | 'Smith Machine'
  | 'Bench Press'
  | 'Adjustable Bench'
  | 'Leg Press Machine'
  | 'Hack Squat Machine'
  | 'Cable Machine'
  | 'Lat Pulldown Machine'
  | 'Seated Row Machine'
  | 'Chest Press Machine'
  | 'Shoulder Press Machine'
  | 'Leg Curl Machine'
  | 'Leg Extension Machine'
  | 'Calf Raise Machine'
  | 'Ab Roller'
  | 'Hyperextension Bench'
  | 'Punching Bag'
  | 'Speed Bag'
  | 'Plyometric Box'
  | 'TRX Suspension Trainer'
  | 'Foam Roller'
  | 'Yoga Mat'
  | 'No Need';

export type UserWorkoutTypeEnum =
  | 'Upper Body'
  | 'Lower Body'
  | 'Core'
  | 'Full-Body'
  | 'Cardio';

export type WorkoutRequestTypeEnum =
  | 'Upper Body'
  | 'Lower Body'
  | 'Core'
  | 'Full-Body'
  | 'Cardio';

export type WorkoutCategoryEnum =
  | 'Strength'
  | 'Cardio'
  | 'Flexibility'
  | 'Balance'
  | 'Endurance'
  | 'Power'
  | 'Speed'
  | 'Agility'
  | 'Mobility'
  | 'Recovery';

export type WorkoutMuscleGroupEnum =
  | 'Chest'
  | 'Back'
  | 'Shoulders'
  | 'Biceps'
  | 'Triceps'
  | 'Forearms'
  | 'Abs'
  | 'Obliques'
  | 'Glutes'
  | 'Quadriceps'
  | 'Hamstrings'
  | 'Calves'
  | 'Traps'
  | 'Lats'
  | 'Lower Back'
  | 'Hip Flexors';

export type WorkoutEquipmentEnum =
  | 'Treadmill'
  | 'Elliptical Trainer'
  | 'Stationary Bike'
  | 'Rowing Machine'
  | 'Stair Climber'
  | 'Dumbbells'
  | 'Barbells'
  | 'Kettlebells'
  | 'Weight Plates'
  | 'Resistance Bands'
  | 'Medicine Ball'
  | 'Slam Ball'
  | 'Sandbag'
  | 'Battle Ropes'
  | 'Jump Rope'
  | 'Pull-up Bar'
  | 'Dip Station'
  | 'Power Rack'
  | 'Squat Rack'
  | 'Smith Machine'
  | 'Bench Press'
  | 'Adjustable Bench'
  | 'Leg Press Machine'
  | 'Hack Squat Machine'
  | 'Cable Machine'
  | 'Lat Pulldown Machine'
  | 'Seated Row Machine'
  | 'Chest Press Machine'
  | 'Shoulder Press Machine'
  | 'Leg Curl Machine'
  | 'Leg Extension Machine'
  | 'Calf Raise Machine'
  | 'Ab Roller'
  | 'Hyperextension Bench'
  | 'Punching Bag'
  | 'Speed Bag'
  | 'Plyometric Box'
  | 'TRX Suspension Trainer'
  | 'Foam Roller'
  | 'Yoga Mat'
  | 'No Need';

export type WorkoutTypeEnum =
  | 'Upper Body'
  | 'Lower Body'
  | 'Core'
  | 'Full-Body'
  | 'Cardio';

export type WorkoutTypeEnum1 =
  | 'Upper Body'
  | 'Lower Body'
  | 'Core'
  | 'Full-Body'
  | 'Cardio';

export interface GetAboutParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  'pagination[withCount]'?: boolean;
  /** Page number (default: 0) */
  'pagination[page]'?: number;
  /** Page size (default: 25) */
  'pagination[pageSize]'?: number;
  /** Offset value (default: 0) */
  'pagination[start]'?: number;
  /** Number of entities to return (default: 25) */
  'pagination[limit]'?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: Record<string, any>;
  /** Locale to apply */
  locale?: string;
}

export type GetAboutData = AboutResponse;

export type PutAboutData = AboutResponse;

/** @format int64 */
export type DeleteAboutData = number;

export interface GetArticlesParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  'pagination[withCount]'?: boolean;
  /** Page number (default: 0) */
  'pagination[page]'?: number;
  /** Page size (default: 25) */
  'pagination[pageSize]'?: number;
  /** Offset value (default: 0) */
  'pagination[start]'?: number;
  /** Number of entities to return (default: 25) */
  'pagination[limit]'?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: Record<string, any>;
  /** Locale to apply */
  locale?: string;
}

export type GetArticlesData = ArticleListResponse;

export type PostArticlesData = ArticleResponse;

export type GetArticlesIdData = ArticleResponse;

export type PutArticlesIdData = ArticleResponse;

/** @format int64 */
export type DeleteArticlesIdData = number;

export interface GetExercisesParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  'pagination[withCount]'?: boolean;
  /** Page number (default: 0) */
  'pagination[page]'?: number;
  /** Page size (default: 25) */
  'pagination[pageSize]'?: number;
  /** Offset value (default: 0) */
  'pagination[start]'?: number;
  /** Number of entities to return (default: 25) */
  'pagination[limit]'?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: Record<string, any>;
  /** Locale to apply */
  locale?: string;
}

export type GetExercisesData = ExerciseListResponse;

export type PostExercisesData = ExerciseResponse;

export type GetExercisesIdData = ExerciseResponse;

export type PutExercisesIdData = ExerciseResponse;

/** @format int64 */
export type DeleteExercisesIdData = number;

export interface GetGlobalParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  'pagination[withCount]'?: boolean;
  /** Page number (default: 0) */
  'pagination[page]'?: number;
  /** Page size (default: 25) */
  'pagination[pageSize]'?: number;
  /** Offset value (default: 0) */
  'pagination[start]'?: number;
  /** Number of entities to return (default: 25) */
  'pagination[limit]'?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: Record<string, any>;
  /** Locale to apply */
  locale?: string;
}

export type GetGlobalData = GlobalResponse;

export type PutGlobalData = GlobalResponse;

/** @format int64 */
export type DeleteGlobalData = number;

export interface GetUserWorkoutsParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  'pagination[withCount]'?: boolean;
  /** Page number (default: 0) */
  'pagination[page]'?: number;
  /** Page size (default: 25) */
  'pagination[pageSize]'?: number;
  /** Offset value (default: 0) */
  'pagination[start]'?: number;
  /** Number of entities to return (default: 25) */
  'pagination[limit]'?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: Record<string, any>;
  /** Locale to apply */
  locale?: string;
}

export type GetUserWorkoutsData = UserWorkoutListResponse;

export type PostUserWorkoutsData = UserWorkoutResponse;

export type GetUserWorkoutsIdData = UserWorkoutResponse;

export type PutUserWorkoutsIdData = UserWorkoutResponse;

/** @format int64 */
export type DeleteUserWorkoutsIdData = number;

export interface GetWorkoutsParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  'pagination[withCount]'?: boolean;
  /** Page number (default: 0) */
  'pagination[page]'?: number;
  /** Page size (default: 25) */
  'pagination[pageSize]'?: number;
  /** Offset value (default: 0) */
  'pagination[start]'?: number;
  /** Number of entities to return (default: 25) */
  'pagination[limit]'?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: Record<string, any>;
  /** Locale to apply */
  locale?: string;
}

export type GetWorkoutsData = WorkoutListResponse;

export type PostWorkoutsData = WorkoutResponse;

export type GetWorkoutsIdData = WorkoutResponse;

export type PutWorkoutsIdData = WorkoutResponse;

/** @format int64 */
export type DeleteWorkoutsIdData = number;

export interface UploadCreatePayload {
  /** The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3). */
  path?: string;
  /** The ID of the entry which the file(s) will be linked to */
  refId?: string;
  /** The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant). */
  ref?: string;
  /** The field of the entry which the file(s) will be precisely linked to. */
  field?: string;
  files: File[];
}

export type UploadCreateData = UploadFile[];

export interface UploadIdCreatePayload {
  fileInfo?: {
    name?: string;
    alternativeText?: string;
    caption?: string;
  };
  /** @format binary */
  files?: File;
}

export interface UploadIdCreateParams {
  id: string;
}

export type UploadIdCreateData = UploadFile[];

export type FilesListData = UploadFile[];

export type FilesDetailData = UploadFile;

export type FilesDeleteData = UploadFile;

export interface LocalCreatePayload {
  identifier?: string;
  password?: string;
}

export type LocalCreateData = UsersPermissionsUserRegistration;

export interface LocalRegisterCreatePayload {
  username?: string;
  email?: string;
  password?: string;
}

export type LocalRegisterCreateData = UsersPermissionsUserRegistration;

export type CallbackDetailData = UsersPermissionsUserRegistration;

export type OkEnum = 'true';

export interface ForgotPasswordCreatePayload {
  email?: string;
}

export interface ForgotPasswordCreateData {
  ok?: OkEnum;
}

export interface ResetPasswordCreatePayload {
  password?: string;
  passwordConfirmation?: string;
  code?: string;
}

export type ResetPasswordCreateData = UsersPermissionsUserRegistration;

export interface ChangePasswordCreatePayload {
  password: string;
  currentPassword: string;
  passwordConfirmation: string;
}

export type ChangePasswordCreateData = UsersPermissionsUserRegistration;

export interface EmailConfirmationListParams {
  /** confirmation token received by email */
  confirmation?: string;
}

export type SentEnum = 'true';

export interface SendEmailConfirmationCreatePayload {
  email?: string;
}

export interface SendEmailConfirmationCreateData {
  email?: string;
  sent?: SentEnum;
}

export interface PermissionsListData {
  permissions?: UsersPermissionsPermissionsTree;
}

export interface RolesListData {
  roles?: (UsersPermissionsRole & {
    nb_users?: number;
  })[];
}

export type OkEnum1 = 'true';

export interface RolesCreateData {
  ok?: OkEnum1;
}

export interface RolesDetailData {
  role?: UsersPermissionsRole;
}

export type OkEnum2 = 'true';

export interface RolesUpdateData {
  ok?: OkEnum2;
}

export type OkEnum3 = 'true';

export interface RolesDeleteData {
  ok?: OkEnum3;
}

export type UsersListData = UsersPermissionsUser[];

export interface UsersCreatePayload {
  email: string;
  username: string;
  password: string;
}

export type UsersCreateData = UsersPermissionsUser & {
  role?: UsersPermissionsRole;
};

export type UsersDetailData = UsersPermissionsUser;

export interface UsersUpdatePayload {
  email: string;
  username: string;
  password: string;
}

export type UsersUpdateData = UsersPermissionsUser & {
  role?: UsersPermissionsRole;
};

export type UsersDeleteData = UsersPermissionsUser;

export type GetUsersPermissionsUsersRolesData = UsersPermissionsUser;

export type CountListData = number;

export namespace About {
  /**
   * No description
   * @tags About
   * @name GetAbout
   * @request GET:/about
   * @secure
   */
  export namespace GetAbout {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      'pagination[withCount]'?: boolean;
      /** Page number (default: 0) */
      'pagination[page]'?: number;
      /** Page size (default: 25) */
      'pagination[pageSize]'?: number;
      /** Offset value (default: 0) */
      'pagination[start]'?: number;
      /** Number of entities to return (default: 25) */
      'pagination[limit]'?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: Record<string, any>;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetAboutData;
  }

  /**
   * No description
   * @tags About
   * @name PutAbout
   * @request PUT:/about
   * @secure
   */
  export namespace PutAbout {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AboutRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutAboutData;
  }

  /**
   * No description
   * @tags About
   * @name DeleteAbout
   * @request DELETE:/about
   * @secure
   */
  export namespace DeleteAbout {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteAboutData;
  }
}

export namespace Article {
  /**
   * No description
   * @tags Article
   * @name GetArticles
   * @request GET:/articles
   * @secure
   */
  export namespace GetArticles {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      'pagination[withCount]'?: boolean;
      /** Page number (default: 0) */
      'pagination[page]'?: number;
      /** Page size (default: 25) */
      'pagination[pageSize]'?: number;
      /** Offset value (default: 0) */
      'pagination[start]'?: number;
      /** Number of entities to return (default: 25) */
      'pagination[limit]'?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: Record<string, any>;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetArticlesData;
  }

  /**
   * No description
   * @tags Article
   * @name PostArticles
   * @request POST:/articles
   * @secure
   */
  export namespace PostArticles {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ArticleRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostArticlesData;
  }

  /**
   * No description
   * @tags Article
   * @name GetArticlesId
   * @request GET:/articles/{id}
   * @secure
   */
  export namespace GetArticlesId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetArticlesIdData;
  }

  /**
   * No description
   * @tags Article
   * @name PutArticlesId
   * @request PUT:/articles/{id}
   * @secure
   */
  export namespace PutArticlesId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = ArticleRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutArticlesIdData;
  }

  /**
   * No description
   * @tags Article
   * @name DeleteArticlesId
   * @request DELETE:/articles/{id}
   * @secure
   */
  export namespace DeleteArticlesId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteArticlesIdData;
  }
}

export namespace Exercise {
  /**
   * No description
   * @tags Exercise
   * @name GetExercises
   * @request GET:/exercises
   * @secure
   */
  export namespace GetExercises {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      'pagination[withCount]'?: boolean;
      /** Page number (default: 0) */
      'pagination[page]'?: number;
      /** Page size (default: 25) */
      'pagination[pageSize]'?: number;
      /** Offset value (default: 0) */
      'pagination[start]'?: number;
      /** Number of entities to return (default: 25) */
      'pagination[limit]'?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: Record<string, any>;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetExercisesData;
  }

  /**
   * No description
   * @tags Exercise
   * @name PostExercises
   * @request POST:/exercises
   * @secure
   */
  export namespace PostExercises {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ExerciseRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostExercisesData;
  }

  /**
   * No description
   * @tags Exercise
   * @name GetExercisesId
   * @request GET:/exercises/{id}
   * @secure
   */
  export namespace GetExercisesId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetExercisesIdData;
  }

  /**
   * No description
   * @tags Exercise
   * @name PutExercisesId
   * @request PUT:/exercises/{id}
   * @secure
   */
  export namespace PutExercisesId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = ExerciseRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutExercisesIdData;
  }

  /**
   * No description
   * @tags Exercise
   * @name DeleteExercisesId
   * @request DELETE:/exercises/{id}
   * @secure
   */
  export namespace DeleteExercisesId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteExercisesIdData;
  }
}

export namespace Global {
  /**
   * No description
   * @tags Global
   * @name GetGlobal
   * @request GET:/global
   * @secure
   */
  export namespace GetGlobal {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      'pagination[withCount]'?: boolean;
      /** Page number (default: 0) */
      'pagination[page]'?: number;
      /** Page size (default: 25) */
      'pagination[pageSize]'?: number;
      /** Offset value (default: 0) */
      'pagination[start]'?: number;
      /** Number of entities to return (default: 25) */
      'pagination[limit]'?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: Record<string, any>;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetGlobalData;
  }

  /**
   * No description
   * @tags Global
   * @name PutGlobal
   * @request PUT:/global
   * @secure
   */
  export namespace PutGlobal {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GlobalRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutGlobalData;
  }

  /**
   * No description
   * @tags Global
   * @name DeleteGlobal
   * @request DELETE:/global
   * @secure
   */
  export namespace DeleteGlobal {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteGlobalData;
  }
}

export namespace UserWorkout {
  /**
   * No description
   * @tags User-workout
   * @name GetUserWorkouts
   * @request GET:/user-workouts
   * @secure
   */
  export namespace GetUserWorkouts {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      'pagination[withCount]'?: boolean;
      /** Page number (default: 0) */
      'pagination[page]'?: number;
      /** Page size (default: 25) */
      'pagination[pageSize]'?: number;
      /** Offset value (default: 0) */
      'pagination[start]'?: number;
      /** Number of entities to return (default: 25) */
      'pagination[limit]'?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: Record<string, any>;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetUserWorkoutsData;
  }

  /**
   * No description
   * @tags User-workout
   * @name PostUserWorkouts
   * @request POST:/user-workouts
   * @secure
   */
  export namespace PostUserWorkouts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserWorkoutRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostUserWorkoutsData;
  }

  /**
   * No description
   * @tags User-workout
   * @name GetUserWorkoutsId
   * @request GET:/user-workouts/{id}
   * @secure
   */
  export namespace GetUserWorkoutsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetUserWorkoutsIdData;
  }

  /**
   * No description
   * @tags User-workout
   * @name PutUserWorkoutsId
   * @request PUT:/user-workouts/{id}
   * @secure
   */
  export namespace PutUserWorkoutsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = UserWorkoutRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutUserWorkoutsIdData;
  }

  /**
   * No description
   * @tags User-workout
   * @name DeleteUserWorkoutsId
   * @request DELETE:/user-workouts/{id}
   * @secure
   */
  export namespace DeleteUserWorkoutsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteUserWorkoutsIdData;
  }
}

export namespace Workout {
  /**
   * No description
   * @tags Workout
   * @name GetWorkouts
   * @request GET:/workouts
   * @secure
   */
  export namespace GetWorkouts {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      'pagination[withCount]'?: boolean;
      /** Page number (default: 0) */
      'pagination[page]'?: number;
      /** Page size (default: 25) */
      'pagination[pageSize]'?: number;
      /** Offset value (default: 0) */
      'pagination[start]'?: number;
      /** Number of entities to return (default: 25) */
      'pagination[limit]'?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: Record<string, any>;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetWorkoutsData;
  }

  /**
   * No description
   * @tags Workout
   * @name PostWorkouts
   * @request POST:/workouts
   * @secure
   */
  export namespace PostWorkouts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WorkoutRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostWorkoutsData;
  }

  /**
   * No description
   * @tags Workout
   * @name GetWorkoutsId
   * @request GET:/workouts/{id}
   * @secure
   */
  export namespace GetWorkoutsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetWorkoutsIdData;
  }

  /**
   * No description
   * @tags Workout
   * @name PutWorkoutsId
   * @request PUT:/workouts/{id}
   * @secure
   */
  export namespace PutWorkoutsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = WorkoutRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutWorkoutsIdData;
  }

  /**
   * No description
   * @tags Workout
   * @name DeleteWorkoutsId
   * @request DELETE:/workouts/{id}
   * @secure
   */
  export namespace DeleteWorkoutsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteWorkoutsIdData;
  }
}

export namespace UploadFile {
  /**
   * @description Upload files
   * @tags Upload - File
   * @name UploadCreate
   * @request POST:/upload
   * @secure
   */
  export namespace UploadCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UploadCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = UploadCreateData;
  }

  /**
   * @description Upload file information
   * @tags Upload - File
   * @name UploadIdCreate
   * @request POST:/upload?id={id}
   * @secure
   */
  export namespace UploadIdCreate {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      /** File id */
      id: string;
    };
    export type RequestBody = UploadIdCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = UploadIdCreateData;
  }

  /**
   * No description
   * @tags Upload - File
   * @name FilesList
   * @request GET:/upload/files
   * @secure
   */
  export namespace FilesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FilesListData;
  }

  /**
   * No description
   * @tags Upload - File
   * @name FilesDetail
   * @request GET:/upload/files/{id}
   * @secure
   */
  export namespace FilesDetail {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FilesDetailData;
  }

  /**
   * No description
   * @tags Upload - File
   * @name FilesDelete
   * @request DELETE:/upload/files/{id}
   * @secure
   */
  export namespace FilesDelete {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FilesDeleteData;
  }
}

export namespace UsersPermissionsAuth {
  /**
   * @description Redirects to provider login before being redirect to /auth/{provider}/callback
   * @tags Users-Permissions - Auth
   * @name ConnectDetail
   * @summary Login with a provider
   * @request GET:/connect/{provider}
   * @secure
   */
  export namespace ConnectDetail {
    export type RequestParams = {
      /**
       * Provider name
       * @pattern .*
       */
      provider: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Returns a jwt token and user info
   * @tags Users-Permissions - Auth
   * @name LocalCreate
   * @summary Local login
   * @request POST:/auth/local
   * @secure
   */
  export namespace LocalCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LocalCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = LocalCreateData;
  }

  /**
   * @description Returns a jwt token and user info
   * @tags Users-Permissions - Auth
   * @name LocalRegisterCreate
   * @summary Register a user
   * @request POST:/auth/local/register
   * @secure
   */
  export namespace LocalRegisterCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LocalRegisterCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = LocalRegisterCreateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Auth
   * @name CallbackDetail
   * @summary Default Callback from provider auth
   * @request GET:/auth/{provider}/callback
   * @secure
   */
  export namespace CallbackDetail {
    export type RequestParams = {
      /** Provider name */
      provider: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallbackDetailData;
  }

  /**
   * No description
   * @tags Users-Permissions - Auth
   * @name ForgotPasswordCreate
   * @summary Send rest password email
   * @request POST:/auth/forgot-password
   * @secure
   */
  export namespace ForgotPasswordCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ForgotPasswordCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ForgotPasswordCreateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Auth
   * @name ResetPasswordCreate
   * @summary Rest user password
   * @request POST:/auth/reset-password
   * @secure
   */
  export namespace ResetPasswordCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ResetPasswordCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ResetPasswordCreateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Auth
   * @name ChangePasswordCreate
   * @summary Update user's own password
   * @request POST:/auth/change-password
   * @secure
   */
  export namespace ChangePasswordCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ChangePasswordCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ChangePasswordCreateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Auth
   * @name EmailConfirmationList
   * @summary Confirm user email
   * @request GET:/auth/email-confirmation
   * @secure
   */
  export namespace EmailConfirmationList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** confirmation token received by email */
      confirmation?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * No description
   * @tags Users-Permissions - Auth
   * @name SendEmailConfirmationCreate
   * @summary Send confirmation email
   * @request POST:/auth/send-email-confirmation
   * @secure
   */
  export namespace SendEmailConfirmationCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SendEmailConfirmationCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = SendEmailConfirmationCreateData;
  }
}

export namespace UsersPermissionsUsersRoles {
  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name PermissionsList
   * @summary Get default generated permissions
   * @request GET:/users-permissions/permissions
   * @secure
   */
  export namespace PermissionsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PermissionsListData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name RolesList
   * @summary List roles
   * @request GET:/users-permissions/roles
   * @secure
   */
  export namespace RolesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RolesListData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name RolesCreate
   * @summary Create a role
   * @request POST:/users-permissions/roles
   * @secure
   */
  export namespace RolesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      name?: string;
      description?: string;
      type?: string;
      permissions?: UsersPermissionsPermissionsTree;
    };
    export type RequestHeaders = {};
    export type ResponseBody = RolesCreateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name RolesDetail
   * @summary Get a role
   * @request GET:/users-permissions/roles/{id}
   * @secure
   */
  export namespace RolesDetail {
    export type RequestParams = {
      /** role Id */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RolesDetailData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name RolesUpdate
   * @summary Update a role
   * @request PUT:/users-permissions/roles/{role}
   * @secure
   */
  export namespace RolesUpdate {
    export type RequestParams = {
      /** role Id */
      role: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      name?: string;
      description?: string;
      type?: string;
      permissions?: UsersPermissionsPermissionsTree;
    };
    export type RequestHeaders = {};
    export type ResponseBody = RolesUpdateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name RolesDelete
   * @summary Delete a role
   * @request DELETE:/users-permissions/roles/{role}
   * @secure
   */
  export namespace RolesDelete {
    export type RequestParams = {
      /** role Id */
      role: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RolesDeleteData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name UsersList
   * @summary Get list of users
   * @request GET:/users
   * @secure
   */
  export namespace UsersList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UsersListData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name UsersCreate
   * @summary Create a user
   * @request POST:/users
   * @secure
   */
  export namespace UsersCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UsersCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = UsersCreateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name UsersDetail
   * @summary Get a user
   * @request GET:/users/{id}
   * @secure
   */
  export namespace UsersDetail {
    export type RequestParams = {
      /** user Id */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UsersDetailData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name UsersUpdate
   * @summary Update a user
   * @request PUT:/users/{id}
   * @secure
   */
  export namespace UsersUpdate {
    export type RequestParams = {
      /** user Id */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UsersUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = UsersUpdateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name UsersDelete
   * @summary Delete a user
   * @request DELETE:/users/{id}
   * @secure
   */
  export namespace UsersDelete {
    export type RequestParams = {
      /** user Id */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UsersDeleteData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name GetUsersPermissionsUsersRoles
   * @summary Get authenticated user info
   * @request GET:/users/me
   * @secure
   */
  export namespace GetUsersPermissionsUsersRoles {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetUsersPermissionsUsersRolesData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name CountList
   * @summary Get user count
   * @request GET:/users/count
   * @secure
   */
  export namespace CountList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CountListData;
  }
}
