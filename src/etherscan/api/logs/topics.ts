/// <reference path="../../types.ts" />

type TopicOperator = 'and' | 'or';

interface TopicParams {
  topic0: Hex;
  topic1?: Hex;
  topic2?: Hex;
  topic3?: Hex;
  topic0_1_opr?: TopicOperator,
  topic1_2_opr?: TopicOperator,
  topic2_3_opr?: TopicOperator,
  topic0_2_opr?: TopicOperator,
  topic0_3_opr?: TopicOperator,
  topic1_3_opr?: TopicOperator,
}

function parseTopicsParams({ 
  topic,
  topicOperator,
}: {
  topic: string | string[];
  topicOperator: string | string[];
}): TopicParams {
  const topics = Array.isArray(topic) ? topic : topic.split(/\s*,\s*/);
  if (topics.length === 0) {
    throw new Error(`You must supply at least one topic (comma-separated or a range): ${topic}`);
  }

  const topicParams = {};
  for (let i = 0; i < topics.length; i += 1) {
    const current = topics[i].trim();
    const found = current.match(/^(topic[0-3])=((?:0x)?[0-9a-fA-F]+)$/);
    if (found == null) {
      throw new Error(`${current} is not a valid topic. It must be in the format topic_0=0xabc01...`);
    }
    topicParams[found[1]] = found[2];
  }

  const topicOperators = Array.isArray(topic) ? topic : topic.split(/\s*,\s*/);
  for (let i = 0; i < topicOperators.length; i += 1) {
    const current = topicOperators[i].trim();
    const found = current.match(/^(topic[0-3]_[0-3]_opr)=(and|or)$/);
    if (found == null) {
      throw new Error(`${current} is not a valid topic. It must be in the format topic_0_1_opr=and`);
    }
    topicParams[found[1]] = found[2];
  }

  // @ts-expect-error
  return topicParams;
}
