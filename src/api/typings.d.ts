declare namespace API {
  type BaseResponseBoolean = {
    /** 状态码 */
    code?: number;
    /** 数据 */
    data?: boolean;
    /** 消息 */
    message?: string;
  };

  type BaseResponseCaptcha = {
    /** 状态码 */
    code?: number;
    data?: Captcha;
    /** 消息 */
    message?: string;
  };

  type BaseResponseInteger = {
    /** 状态码 */
    code?: number;
    /** 数据 */
    data?: number;
    /** 消息 */
    message?: string;
  };

  type BaseResponseLoginUserVO = {
    /** 状态码 */
    code?: number;
    data?: LoginUserVO;
    /** 消息 */
    message?: string;
  };

  type BaseResponseLong = {
    /** 状态码 */
    code?: number;
    /** 数据 */
    data?: number;
    /** 消息 */
    message?: string;
  };

  type BaseResponsePagePost = {
    /** 状态码 */
    code?: number;
    data?: PagePost;
    /** 消息 */
    message?: string;
  };

  type BaseResponsePagePostVO = {
    /** 状态码 */
    code?: number;
    data?: PagePostVO;
    /** 消息 */
    message?: string;
  };

  type BaseResponsePageTag = {
    /** 状态码 */
    code?: number;
    data?: PageTag;
    /** 消息 */
    message?: string;
  };

  type BaseResponsePageTagVO = {
    /** 状态码 */
    code?: number;
    data?: PageTagVO;
    /** 消息 */
    message?: string;
  };

  type BaseResponsePageUser = {
    /** 状态码 */
    code?: number;
    data?: PageUser;
    /** 消息 */
    message?: string;
  };

  type BaseResponsePageUserVO = {
    /** 状态码 */
    code?: number;
    data?: PageUserVO;
    /** 消息 */
    message?: string;
  };

  type BaseResponsePostVO = {
    /** 状态码 */
    code?: number;
    data?: PostVO;
    /** 消息 */
    message?: string;
  };

  type BaseResponseSearchVOObject = {
    /** 状态码 */
    code?: number;
    data?: SearchVOObject;
    /** 消息 */
    message?: string;
  };

  type BaseResponseString = {
    /** 状态码 */
    code?: number;
    /** 数据 */
    data?: string;
    /** 消息 */
    message?: string;
  };

  type BaseResponseTagVO = {
    /** 状态码 */
    code?: number;
    data?: TagVO;
    /** 消息 */
    message?: string;
  };

  type BaseResponseUser = {
    /** 状态码 */
    code?: number;
    data?: User;
    /** 消息 */
    message?: string;
  };

  type BaseResponseUserVO = {
    /** 状态码 */
    code?: number;
    data?: UserVO;
    /** 消息 */
    message?: string;
  };

  type Captcha = {
    code?: string;
    uuid?: string;
    image?: string;
    imageBuffer?: {
      accelerationPriority?: number;
      colorModel?: {
        transparency?: number;
        numComponents?: number;
        numColorComponents?: number;
        colorSpace?: {
          type?: number;
          numComponents?: number;
          cs_sRGB?: boolean;
        };
        transferType?: number;
        alphaPremultiplied?: boolean;
        componentSize?: number[];
        pixelSize?: number;
      };
      raster?: {
        sampleModel?: {
          width?: number;
          height?: number;
          numBands?: number;
          dataType?: number;
          transferType?: number;
          sampleSize?: number[];
          numDataElements?: number;
        };
        dataBuffer?: {
          dataType?: number;
          offset?: number;
          size?: number;
          offsets?: number[];
          numBanks?: number;
        };
        minX?: number;
        minY?: number;
        width?: number;
        height?: number;
        sampleModelTranslateX?: number;
        sampleModelTranslateY?: number;
        numBands?: number;
        numDataElements?: number;
        parent?: {
          sampleModel?: {
            width?: number;
            height?: number;
            numBands?: number;
            dataType?: number;
            transferType?: number;
            sampleSize?: number[];
            numDataElements?: number;
          };
          dataBuffer?: {
            dataType?: number;
            offset?: number;
            size?: number;
            offsets?: number[];
            numBanks?: number;
          };
          minX?: number;
          minY?: number;
          width?: number;
          height?: number;
          sampleModelTranslateX?: number;
          sampleModelTranslateY?: number;
          numBands?: number;
          numDataElements?: number;
          transferType?: number;
          bounds?: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            bounds2D?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              height?: number;
              width?: number;
            };
            empty?: boolean;
            location?: { x?: number; y?: number };
            size?: { width?: number; height?: number };
            rect?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              height?: number;
              width?: number;
            };
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
          };
        };
        rect?: {
          sampleModel?: {
            width?: number;
            height?: number;
            numBands?: number;
            dataType?: number;
            transferType?: number;
            sampleSize?: number[];
            numDataElements?: number;
          };
          dataBuffer?: {
            dataType?: number;
            offset?: number;
            size?: number;
            offsets?: number[];
            numBanks?: number;
          };
          minX?: number;
          minY?: number;
          width?: number;
          height?: number;
          sampleModelTranslateX?: number;
          sampleModelTranslateY?: number;
          numBands?: number;
          numDataElements?: number;
          transferType?: number;
          bounds?: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            bounds2D?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              height?: number;
              width?: number;
            };
            empty?: boolean;
            location?: { x?: number; y?: number };
            size?: { width?: number; height?: number };
            rect?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              height?: number;
              width?: number;
            };
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
          };
        };
        transferType?: number;
        bounds?: {
          x?: number;
          y?: number;
          width?: number;
          height?: number;
          bounds2D?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            height?: number;
            width?: number;
          };
          empty?: boolean;
          location?: { x?: number; y?: number };
          size?: { width?: number; height?: number };
          rect?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            height?: number;
            width?: number;
          };
          minX?: number;
          minY?: number;
          maxX?: number;
          maxY?: number;
          centerX?: number;
          centerY?: number;
        };
      };
      sampleModel?: {
        width?: number;
        height?: number;
        numBands?: number;
        dataType?: number;
        transferType?: number;
        sampleSize?: number[];
        numDataElements?: number;
      };
      minX?: number;
      minY?: number;
      numXTiles?: number;
      numYTiles?: number;
      minTileX?: number;
      minTileY?: number;
      tileWidth?: number;
      tileHeight?: number;
      tileGridXOffset?: number;
      tileGridYOffset?: number;
      alphaPremultiplied?: boolean;
      alphaRaster?: {
        sampleModel?: {
          width?: number;
          height?: number;
          numBands?: number;
          dataType?: number;
          transferType?: number;
          sampleSize?: number[];
          numDataElements?: number;
        };
        dataBuffer?: {
          dataType?: number;
          offset?: number;
          size?: number;
          offsets?: number[];
          numBanks?: number;
        };
        minX?: number;
        minY?: number;
        width?: number;
        height?: number;
        sampleModelTranslateX?: number;
        sampleModelTranslateY?: number;
        numBands?: number;
        numDataElements?: number;
        parent?: {
          sampleModel?: {
            width?: number;
            height?: number;
            numBands?: number;
            dataType?: number;
            transferType?: number;
            sampleSize?: number[];
            numDataElements?: number;
          };
          dataBuffer?: {
            dataType?: number;
            offset?: number;
            size?: number;
            offsets?: number[];
            numBanks?: number;
          };
          minX?: number;
          minY?: number;
          width?: number;
          height?: number;
          sampleModelTranslateX?: number;
          sampleModelTranslateY?: number;
          numBands?: number;
          numDataElements?: number;
          transferType?: number;
          bounds?: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            bounds2D?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              height?: number;
              width?: number;
            };
            empty?: boolean;
            location?: { x?: number; y?: number };
            size?: { width?: number; height?: number };
            rect?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              height?: number;
              width?: number;
            };
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
          };
        };
        rect?: {
          sampleModel?: {
            width?: number;
            height?: number;
            numBands?: number;
            dataType?: number;
            transferType?: number;
            sampleSize?: number[];
            numDataElements?: number;
          };
          dataBuffer?: {
            dataType?: number;
            offset?: number;
            size?: number;
            offsets?: number[];
            numBanks?: number;
          };
          minX?: number;
          minY?: number;
          width?: number;
          height?: number;
          sampleModelTranslateX?: number;
          sampleModelTranslateY?: number;
          numBands?: number;
          numDataElements?: number;
          transferType?: number;
          bounds?: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            bounds2D?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              height?: number;
              width?: number;
            };
            empty?: boolean;
            location?: { x?: number; y?: number };
            size?: { width?: number; height?: number };
            rect?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              height?: number;
              width?: number;
            };
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
          };
        };
        transferType?: number;
        bounds?: {
          x?: number;
          y?: number;
          width?: number;
          height?: number;
          bounds2D?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            height?: number;
            width?: number;
          };
          empty?: boolean;
          location?: { x?: number; y?: number };
          size?: { width?: number; height?: number };
          rect?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            height?: number;
            width?: number;
          };
          minX?: number;
          minY?: number;
          maxX?: number;
          maxY?: number;
          centerX?: number;
          centerY?: number;
        };
      };
      graphics?: {
        clipBounds?: {
          x?: number;
          y?: number;
          width?: number;
          height?: number;
          bounds2D?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            height?: number;
            width?: number;
          };
          empty?: boolean;
          location?: { x?: number; y?: number };
          size?: { width?: number; height?: number };
          rect?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            height?: number;
            width?: number;
          };
          minX?: number;
          minY?: number;
          maxX?: number;
          maxY?: number;
          centerX?: number;
          centerY?: number;
        };
        xormode?: {
          red?: number;
          green?: number;
          blue?: number;
          alpha?: number;
          rgb?: number;
          colorSpace?: {
            type?: number;
            numComponents?: number;
            cs_sRGB?: boolean;
          };
          transparency?: number;
        };
        clip?: {
          bounds2D?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            height?: number;
            width?: number;
          };
          bounds?: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            bounds2D?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              height?: number;
              width?: number;
            };
            empty?: boolean;
            location?: { x?: number; y?: number };
            size?: { width?: number; height?: number };
            rect?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              height?: number;
              width?: number;
            };
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
          };
        };
        clipRect?: {
          x?: number;
          y?: number;
          width?: number;
          height?: number;
          bounds2D?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            height?: number;
            width?: number;
          };
          empty?: boolean;
          location?: { x?: number; y?: number };
          size?: { width?: number; height?: number };
          rect?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            height?: number;
            width?: number;
          };
          minX?: number;
          minY?: number;
          maxX?: number;
          maxY?: number;
          centerX?: number;
          centerY?: number;
        };
        color?: {
          red?: number;
          green?: number;
          blue?: number;
          alpha?: number;
          rgb?: number;
          colorSpace?: {
            type?: number;
            numComponents?: number;
            cs_sRGB?: boolean;
          };
          transparency?: number;
        };
        fontMetrics?: {
          font?: {
            name?: string;
            style?: number;
            size?: number;
            fontName?: string;
            transform?: {
              scaleX?: number;
              shearY?: number;
              shearX?: number;
              scaleY?: number;
              translateX?: number;
              translateY?: number;
              toRotation?: number;
              toQuadrantRotation?: number;
              determinant?: number;
              type?: number;
              identity?: boolean;
            };
            bold?: boolean;
            italic?: boolean;
            numGlyphs?: number;
            missingGlyphCode?: number;
            italicAngle?: number;
            transformed?: boolean;
            psname?: string;
            size2D?: number;
            availableAttributes?: Record<string, any>[];
            attributes?: Record<string, any>;
            family?: string;
            plain?: boolean;
          };
          fontRenderContext?: {
            antiAliased?: boolean;
            transformType?: number;
            transform?: {
              scaleX?: number;
              shearY?: number;
              shearX?: number;
              scaleY?: number;
              translateX?: number;
              translateY?: number;
              toRotation?: number;
              toQuadrantRotation?: number;
              determinant?: number;
              type?: number;
              identity?: boolean;
            };
            antiAliasingHint?: Record<string, any>;
            fractionalMetricsHint?: Record<string, any>;
            transformed?: boolean;
          };
          maxDescent?: number;
          widths?: number[];
          maxAscent?: number;
          maxDecent?: number;
          maxAdvance?: number;
          ascent?: number;
          descent?: number;
          leading?: number;
          height?: number;
        };
        font?: {
          name?: string;
          style?: number;
          size?: number;
          fontName?: string;
          transform?: {
            scaleX?: number;
            shearY?: number;
            shearX?: number;
            scaleY?: number;
            translateX?: number;
            translateY?: number;
            toRotation?: number;
            toQuadrantRotation?: number;
            determinant?: number;
            type?: number;
            identity?: boolean;
          };
          bold?: boolean;
          italic?: boolean;
          numGlyphs?: number;
          missingGlyphCode?: number;
          italicAngle?: number;
          transformed?: boolean;
          psname?: string;
          size2D?: number;
          availableAttributes?: Record<string, any>[];
          attributes?: Record<string, any>;
          family?: string;
          plain?: boolean;
        };
      };
      writableTileIndices?: { x?: number; y?: number }[];
      transparency?: number;
      data?: {
        sampleModel?: {
          width?: number;
          height?: number;
          numBands?: number;
          dataType?: number;
          transferType?: number;
          sampleSize?: number[];
          numDataElements?: number;
        };
        dataBuffer?: {
          dataType?: number;
          offset?: number;
          size?: number;
          offsets?: number[];
          numBanks?: number;
        };
        minX?: number;
        minY?: number;
        width?: number;
        height?: number;
        sampleModelTranslateX?: number;
        sampleModelTranslateY?: number;
        numBands?: number;
        numDataElements?: number;
        transferType?: number;
        bounds?: {
          x?: number;
          y?: number;
          width?: number;
          height?: number;
          bounds2D?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            height?: number;
            width?: number;
          };
          empty?: boolean;
          location?: { x?: number; y?: number };
          size?: { width?: number; height?: number };
          rect?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            height?: number;
            width?: number;
          };
          minX?: number;
          minY?: number;
          maxX?: number;
          maxY?: number;
          centerX?: number;
          centerY?: number;
        };
      };
      type?: number;
      source?: Record<string, any>;
      propertyNames?: string[];
      height?: number;
      sources?: {
        sampleModel?: {
          width?: number;
          height?: number;
          numBands?: number;
          dataType?: number;
          transferType?: number;
          sampleSize?: number[];
          numDataElements?: number;
        };
        minX?: number;
        minY?: number;
        numXTiles?: number;
        numYTiles?: number;
        minTileX?: number;
        minTileY?: number;
        tileWidth?: number;
        tileHeight?: number;
        tileGridXOffset?: number;
        tileGridYOffset?: number;
        colorModel?: {
          transparency?: number;
          numComponents?: number;
          numColorComponents?: number;
          colorSpace?: {
            type?: number;
            numComponents?: number;
            cs_sRGB?: boolean;
          };
          transferType?: number;
          alphaPremultiplied?: boolean;
          componentSize?: number[];
          pixelSize?: number;
        };
        data?: {
          sampleModel?: {
            width?: number;
            height?: number;
            numBands?: number;
            dataType?: number;
            transferType?: number;
            sampleSize?: number[];
            numDataElements?: number;
          };
          dataBuffer?: {
            dataType?: number;
            offset?: number;
            size?: number;
            offsets?: number[];
            numBanks?: number;
          };
          minX?: number;
          minY?: number;
          width?: number;
          height?: number;
          sampleModelTranslateX?: number;
          sampleModelTranslateY?: number;
          numBands?: number;
          numDataElements?: number;
          transferType?: number;
          bounds?: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            bounds2D?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              height?: number;
              width?: number;
            };
            empty?: boolean;
            location?: { x?: number; y?: number };
            size?: { width?: number; height?: number };
            rect?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              height?: number;
              width?: number;
            };
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
          };
        };
        propertyNames?: string[];
        height?: number;
        width?: number;
      }[];
      width?: number;
    };
  };

  type checkCaptchaCodeParams = {
    code: string;
  };

  type checkParams = {
    timestamp: string;
    nonce: string;
    signature: string;
    echostr: string;
  };

  type DeleteRequest = {
    /** id */
    id?: number;
  };

  type getPostVOByIdParams = {
    id: number;
  };

  type getTagVOByIdParams = {
    id: number;
  };

  type getUserByIdParams = {
    id: number;
  };

  type getUserVOByIdParams = {
    id: number;
  };

  type LoginUserVO = {
    /** 用户 id */
    id?: number;
    /** 用户昵称 */
    userName?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户角色：user/admin/ban */
    userRole?: string;
    /** 用户邮箱 */
    userEmail?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** token */
    token?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PagePost = {
    records?: Post[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PagePost;
    searchCount?: PagePost;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PagePostVO = {
    records?: PostVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PagePostVO;
    searchCount?: PagePostVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageTag = {
    records?: Tag[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageTag;
    searchCount?: PageTag;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageTagVO = {
    records?: TagVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageTagVO;
    searchCount?: PageTagVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUser = {
    records?: User[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUser;
    searchCount?: PageUser;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUserVO = {
    records?: UserVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUserVO;
    searchCount?: PageUserVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type Post = {
    /** id */
    id?: number;
    /** 标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 封面 */
    cover?: string;
    /** 标签列表 json */
    tags?: string;
    /** 点赞数 */
    thumbNum?: number;
    /** 收藏数 */
    favourNum?: number;
    /** 创建用户 id */
    userId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 是否删除 */
    isDelete?: number;
  };

  type PostAddRequest = {
    /** 标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 封面 */
    cover?: string;
    /** 标签列表 */
    tags?: string[];
  };

  type PostEditRequest = {
    /** id */
    id?: number;
    /** 标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 封面 */
    cover?: string;
    /** 标签列表 */
    tags?: string[];
  };

  type PostFavourAddRequest = {
    /** 帖子 id */
    postId?: number;
  };

  type PostFavourQueryRequest = {
    /** 当前页号 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    /** 排序字段 */
    sortField?: string;
    /** 排序顺序（默认升序） */
    sortOrder?: string;
    postQueryRequest?: PostQueryRequest;
    /** 用户 id */
    userId?: number;
  };

  type PostQueryRequest = {
    /** 当前页号 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    /** 排序字段 */
    sortField?: string;
    /** 排序顺序（默认升序） */
    sortOrder?: string;
    /** id */
    id?: number;
    /** notId */
    notId?: number;
    /** 搜索词 */
    searchText?: string;
    /** 标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 标签列表 */
    tags?: string[];
    /** 至少有一个标签 */
    orTags?: string[];
    /** 创建用户 id */
    userId?: number;
    /** 收藏用户 id */
    favourUserId?: number;
  };

  type PostThumbAddRequest = {
    /** 帖子 id */
    postId?: number;
  };

  type PostUpdateRequest = {
    /** id */
    id?: number;
    /** 标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 封面 */
    cover?: string;
    /** 标签列表 */
    tags?: string[];
  };

  type PostVO = {
    /** id */
    id?: number;
    /** 标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 封面 */
    cover?: string;
    /** 点赞数 */
    thumbNum?: number;
    /** 收藏数 */
    favourNum?: number;
    /** 创建用户 id */
    userId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 标签列表 */
    tags?: string[];
    userVO?: UserVO;
    /** 是否已点赞 */
    hasThumb?: boolean;
    /** 是否已收藏 */
    hasFavour?: boolean;
  };

  type SearchRequest = {
    /** 当前页号 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    /** 排序字段 */
    sortField?: string;
    /** 排序顺序（默认升序） */
    sortOrder?: string;
    /** 搜索词 */
    searchText?: string;
    /** 分类 */
    type?: string;
  };

  type SearchVOObject = {
    dataList?: Record<string, any>[];
  };

  type Tag = {
    /** id */
    id?: number;
    /** 标签名称 */
    tagName?: string;
    /** 用户id */
    userId?: number;
    /** 父标签id */
    parentId?: number;
    /** 0-不是父标签，1-是父标签 */
    isParent?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 是否删除 */
    isDelete?: number;
  };

  type TagAddRequest = {
    /** 标签名称 */
    tagName?: string;
    /** 父标签id */
    parentId?: number;
    /** 0-不是父标签，1-是父标签 */
    isParent?: number;
  };

  type TagEditRequest = {
    /** id */
    id?: number;
    /** 标签名称 */
    tagName?: string;
  };

  type TagQueryRequest = {
    /** 当前页号 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    /** 排序字段 */
    sortField?: string;
    /** 排序顺序（默认升序） */
    sortOrder?: string;
    /** id */
    id?: number;
    /** 标签名称 */
    tagName?: string;
    /** 用户id */
    userId?: number;
    /** 父标签id */
    parentId?: number;
    /** 0-不是父标签，1-是父标签 */
    isParent?: number;
  };

  type TagUpdateRequest = {
    /** id */
    id?: number;
    /** 标签名称 */
    tagName?: string;
    /** 父标签id */
    parentId?: number;
    /** 0-不是父标签，1-是父标签 */
    isParent?: number;
    /** id列表 */
    idList?: number[];
  };

  type TagVO = {
    /** id */
    id?: number;
    /** 标签名称 */
    tagName?: string;
    /** 用户id */
    userId?: number;
    /** 父标签id */
    parentId?: number;
    /** 0-不是父标签，1-是父标签 */
    isParent?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    userVO?: UserVO;
  };

  type uploadFileParams = {
    uploadFileRequest: UploadFileRequest;
  };

  type UploadFileRequest = {
    /** 业务 */
    biz?: string;
  };

  type User = {
    /** id */
    id?: number;
    /** 用户账号 */
    userAccount?: string;
    /** 用户密码 */
    userPassword?: string;
    /** 开放平台id */
    unionId?: string;
    /** 公众号openId */
    mpOpenId?: string;
    /** 用户昵称 */
    userName?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户角色：user/admin/ban */
    userRole?: string;
    /** 用户邮箱 */
    userEmail?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 是否删除 */
    isDelete?: number;
  };

  type UserAddRequest = {
    /** 用户昵称 */
    userName?: string;
    /** 账号 */
    userAccount?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户角色: user, admin */
    userRole?: string;
    /** 用户邮箱 */
    userEmail?: string;
  };

  type UserEditRequest = {
    /** 用户昵称 */
    userName?: string;
    /** 用户密码 */
    userPassword?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户邮箱 */
    userEmail?: string;
  };

  type userLoginByWxOpenParams = {
    code: string;
  };

  type UserLoginRequest = {
    /** 账号 */
    userAccount?: string;
    /** 密码 */
    userPassword?: string;
  };

  type UserQueryRequest = {
    /** 当前页号 */
    current?: number;
    /** 页面大小 */
    pageSize?: number;
    /** 排序字段 */
    sortField?: string;
    /** 排序顺序（默认升序） */
    sortOrder?: string;
    /** id */
    id?: number;
    /** notId */
    notId?: number;
    /** 开放平台id */
    unionId?: string;
    /** 公众号openId */
    mpOpenId?: string;
    /** 用户昵称 */
    userName?: string;
    /** 用户角色：user/admin/ban */
    userRole?: string;
    /** 用户邮箱 */
    userEmail?: string;
    /** 搜索关键词 */
    searchText?: string;
  };

  type UserRegisterRequest = {
    /** 账号 */
    userAccount?: string;
    /** 密码 */
    userPassword?: string;
    /** 再次输入密码 */
    checkPassword?: string;
  };

  type UserUpdateRequest = {
    /** id */
    id?: number;
    /** 用户昵称 */
    userName?: string;
    /** 用户密码 */
    userPassword?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户角色：user/admin/ban */
    userRole?: string;
    /** 用户邮箱 */
    userEmail?: string;
  };

  type UserVO = {
    /** id */
    id?: number;
    /** 用户昵称 */
    userName?: string;
    /** 开放平台id */
    unionId?: string;
    /** 公众号openId */
    mpOpenId?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户角色：user/admin/ban */
    userRole?: string;
    /** 用户邮箱 */
    userEmail?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
  };
}
