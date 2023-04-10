import { checkedTags } from "../handler/tagClickHandler";

const TagCheckBoxView = ({ tag, id }) => {
  if (checkedTags.includes(id)) {
    return `<article>
    <input type="checkbox" id=${id} checked />
    ${tag}
</article>`
  } else {
    return `<article>
    <input type="checkbox" id=${id} />
    ${tag}
</article>`
  }
};

export default TagCheckBoxView;