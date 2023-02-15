export function login(email: string, password: string) {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}

export function register(email: string, password: string, name: string, surname: string, phone: string) {
  return fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, surname, phone }),
  });
}

interface CreateRequestBody {
  type: string;
  details: string;
  year: string;
  make: string;
  model: string;
  userId: string;
}

export function createRequests(requestBody: CreateRequestBody) {
  return fetch("/api/createRequests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
}

export function getRequests() {
  return fetch("/api/requests", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function deleteRequest(id: string) {
  return fetch(`/api/deleteRequests`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function closeRequests(id: string) {
  return fetch(`/api/closeRequests`, {
    method: "PUT",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
