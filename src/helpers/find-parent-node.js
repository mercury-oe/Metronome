export default function findParentNode(node: any, nodeName: string) {
  if (node.nodeName === nodeName) {
    return node;
  } else {
    return findParentNode(node.parentNode, nodeName);
  }
}
