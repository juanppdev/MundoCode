export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blog: {
        Row: {
          btn_link: string | null
          categoria: string | null
          contenido: string | null
          fecha: string | null
          id: number
          imagen: string | null
          imagen_perfil: string | null
          nombre_pefil: string | null
          titulo: string
        }
        Insert: {
          btn_link?: string | null
          categoria?: string | null
          contenido?: string | null
          fecha?: string | null
          id?: number
          imagen?: string | null
          imagen_perfil?: string | null
          nombre_pefil?: string | null
          titulo: string
        }
        Update: {
          btn_link?: string | null
          categoria?: string | null
          contenido?: string | null
          fecha?: string | null
          id?: number
          imagen?: string | null
          imagen_perfil?: string | null
          nombre_pefil?: string | null
          titulo?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}