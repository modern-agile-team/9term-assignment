const API_BASE_URL = '/todos';

export const getTodos = async () => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) throw new Error('데이터를 가져오는 중 에러가 발생했습니다.');
  return response.json();
};

export const postTodo = async (task) => {
  await fetch(API_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task }),
  });
};

export const deleteTodo = async (id) => {
  await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' });
};

export const updateTodo = async (id, task, completed) => {
  await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task, completed }),
  });
};
