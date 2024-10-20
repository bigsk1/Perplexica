import logger from '../../utils/logger';
import { HuggingFaceTransformersEmbeddings } from '../huggingfaceTransformer';

export const loadTransformersEmbeddingsModels = async () => {
  try {
    const embeddingModels = {
      'xenova-bge-small-en-v1.5': {
        displayName: 'BGE Small',
        model: new HuggingFaceTransformersEmbeddings({
          modelName: 'Xenova/bge-small-en-v1.5',
        }),
      },
      'xenova-gte-small': {
        displayName: 'GTE Small',
        model: new HuggingFaceTransformersEmbeddings({
          modelName: 'Xenova/gte-small',
        }),
      },
      'xenova-bert-base-multilingual-uncased': {
        displayName: 'Bert Multilingual',
        model: new HuggingFaceTransformersEmbeddings({
          modelName: 'Xenova/bert-base-multilingual-uncased',
        }),
      },
    };

    return embeddingModels;
  } catch (err) {
    logger.error(`Error loading Transformers embeddings model: ${err}`);
    return {};
  }
};
