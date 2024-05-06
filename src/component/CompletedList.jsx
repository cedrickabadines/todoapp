export default function CompletedList({ completedArray }) {
  return (
    <>
      <ul>
        {completedArray.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </>
  );
}
