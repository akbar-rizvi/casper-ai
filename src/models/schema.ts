import { relations } from 'drizzle-orm';
import { serial,varchar,pgTable,primaryKey, jsonb, timestamp, integer,text } from 'drizzle-orm/pg-core';


export const users: any = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).unique().notNull(),
  password: varchar("password", { length: 255 }),
  credits: integer("credits").notNull().default(50),
  createdAt:timestamp("created_at").notNull().defaultNow(),
});
  
export const articles:any = pgTable("articles", {
 id: serial("id").primaryKey(),
 userId:integer("user_id").references(() => users.id),
 filename:varchar("filename").notNull(),
 aiGeneratedPost:text("ai_generated_post"),
 createdAt:timestamp("created_at").notNull().defaultNow(),
 

});



// User → Article (1-to-many)
export const usersRelations = relations(users, ({ many }) => ({
  articles: many(articles),
}));

// Article → User (many-to-1)
export const articlesRelations = relations(articles, ({ one }) => ({
  user: one(users, {
    fields: [articles.userId],
    references: [users.id],
  }),
}));






  