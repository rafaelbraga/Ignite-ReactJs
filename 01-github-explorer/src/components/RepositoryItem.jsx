export function Repositoryitem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "Repo Name"}</strong>
      <p>{props.repository?.description ?? "Descricao"}</p>

      <a href="">{props.repository?.link ?? "link"}</a>
    </li>
  );
}
