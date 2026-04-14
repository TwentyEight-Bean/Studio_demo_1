export interface AlbumAccessConfig {
  adminPassword: string;
  albumPasswords: Record<string, string>;
}

export const DEFAULT_ADMIN_PASSWORD = "admin123";
const STORAGE_KEY = "ivy_album_access_config";

export function getDefaultAlbumAccessConfig(): AlbumAccessConfig {
  return {
    adminPassword: DEFAULT_ADMIN_PASSWORD,
    albumPasswords: {},
  };
}

export function loadAlbumAccessConfig(): AlbumAccessConfig {
  if (typeof window === "undefined") {
    return getDefaultAlbumAccessConfig();
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return getDefaultAlbumAccessConfig();
  }

  try {
    const parsed = JSON.parse(raw) as Partial<AlbumAccessConfig>;
    return {
      adminPassword: parsed.adminPassword?.trim() || DEFAULT_ADMIN_PASSWORD,
      albumPasswords: parsed.albumPasswords ?? {},
    };
  } catch {
    return getDefaultAlbumAccessConfig();
  }
}

export function saveAlbumAccessConfig(config: AlbumAccessConfig): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}
