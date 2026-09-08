# Cursor Rules to Claude Code Migration Audit

Audited 36 Cursor rule/command files containing 130+ sections. Total estimated token footprint: ~85,000 tokens.

---

## 1. Audit Table

Sorted by weakest combined score (Clarity + Activation Fit) first.

| File | Section | Dest | Clarity | Act.Fit | Token Est. | Overlap | Highest-Value Fix |
|------|---------|------|---------|---------|------------|---------|-------------------|
| supabase-realtime-monitor.md | Advanced Features & Integration | drop | 1 | 1 | 150 | None (outside scope) | Delete; product roadmap, not dev guidance |
| supabase-realtime-monitor.md | Error Monitoring & Analytics | drop | 1 | 1 | 220 | Vitest patterns, error handling | Remove; reframe as error logging code example if needed |
| supabase-realtime-monitor.md | Task Objective & Context | drop | 2 | 1 | 120 | supabase skill, CLAUDE.md useRealtime | Delete; replace with CLAUDE.md link |
| supabase-schema-sync.md | Advanced Features & QA Checklists | drop | 1 | 1 | 150 | code-review, security-review | Delete; too vague |
| supabase-security-audit.md | Advanced Features & Compliance | drop | 1 | 1 | 70 | None | Delete; feature roadmap, not guidance |
| supabase-type-generator.md | Validation, Sync & Advanced | drop | 1 | 1 | 400 | None actionable | Delete; aspirational wishlist |
| supabase-type-generator.md | Type Generation & Utilities | drop | 1 | 1 | 250 | supabase skill, CLAUDE.md | Delete; project uses built-in gen types |
| supabase-type-generator.md | Integration Setup & Config | drop | 1 | 1 | 200 | CLAUDE.md project structure | Delete; project already configured |
| supabase-performance-optimizer.md | Advanced Features & Monitoring | drop | 1 | 1 | 180 | Earlier sections (redundant meta) | Delete; aspirational bullet points |
| supabase-backup-manager.md | Advanced Features & Monitoring | drop | 1 | 1 | 110 | None | Delete; feature list, not guidance |
| supabase-backup-manager.md | Backup Context Diagnostics | drop | 1 | 1 | 90 | None | Delete; template pseudo-code |
| CUSTOMIZATION_GUIDE.md | Quick Start Checklist | drop | 1 | 1 | 80 | Entire document | Delete; redundant summary |
| CUSTOMIZATION_GUIDE.md | Components & UI | drop | 1 | 1 | 80 | None | Delete; generic knowledge |
| CUSTOMIZATION_GUIDE.md | Application Pages | drop | 1 | 1 | 75 | CLAUDE.md auth section | Delete; generic routing |
| CUSTOMIZATION_GUIDE.md | Configuration Files | drop | 1 | 1 | 65 | None | Delete; standard Node config |
| CUSTOMIZATION_GUIDE.md | PWA (Optional) | drop | 1 | 1 | 50 | None | Delete; optional, generic |
| CUSTOMIZATION_GUIDE.md | Content Strategy | drop | 1 | 1 | 70 | None | Delete; product planning, not code |
| CUSTOMIZATION_GUIDE.md | Security & Compliance | drop | 1 | 1 | 85 | security-review skill | Delete; generic checklist |
| CUSTOMIZATION_GUIDE.md | Feature Configuration | drop | 1 | 1 | 95 | supabase skill | Delete; feature list |
| CUSTOMIZATION_GUIDE.md | Testing & Development | drop | 1 | 1 | 95 | CLAUDE.md testing section | Delete; covered by CLAUDE.md |
| CUSTOMIZATION_GUIDE.md | Deployment & DevOps | drop | 1 | 1 | 80 | vercel:deploy, vercel:env | Delete; use Vercel skills |
| supabase-data-explorer.md | Task Objective | drop | 2 | 1 | 80 | supabase skill, CLAUDE.md | Delete; aspirational framing |
| supabase-data-explorer.md | Export & Visualization | drop | 2 | 1 | 100 | dataviz skill, Artifacts | Delete; generic export |
| supabase-data-explorer.md | Performance Analysis | drop | 2 | 1 | 95 | code-review, perf optimization | Delete; generic SQL advice |
| supabase-data-explorer.md | Advanced & Safety | drop | 1 | 1 | 85 | CLAUDE.md RLS, security-review | Delete; bullet-point list |
| supabase-performance-optimizer.md | Query Optimization | drop | 2 | 1 | 310 | code-review, simplify | Delete; too generic |
| supabase-realtime-monitor.md | Performance Optimization | drop | 2 | 1 | 100 | supabase skill, CLAUDE.md perf | Delete; generic advice |
| scaffold-new-feature.md | State Management Setup | drop | 4 | 1 | 100 | CLAUDE.md Server-First | Delete; contradicts project patterns |
| resume-current-task.md | Task Objective | drop | 2 | 1 | 75 | --continue/--resume flags | Delete; model default behavior |
| resume-current-task.md | Update Task Status | drop | 2 | 1 | 60 | workflow-orchestration, TaskStop | Delete; Cursor-specific paradigm |
| resume-current-task.md | Assess Overall Progress | drop | 4 | 2 | 55 | Model default behavior | Delete; implicit in any interaction |
| pr-summary-description.md | Task Overview & Principles | drop | 4 | 0 | 200 | code-review, pr-review-toolkit | Delete; generic methodology |
| pr-summary-description.md | Git Prep & Change Gathering | drop | 5 | 0 | 250 | Bash tool, code-review | Delete; standard git ops |
| pr-summary-description.md | Diff Analysis Framework | drop | 4 | 0 | 250 | code-review analysis | Delete; embedded in code-review |
| CUSTOMIZATION_GUIDE.md | Core Identity & Branding | drop | 2 | 1 | 150 | None | Delete; generic rebranding |
| CUSTOMIZATION_GUIDE.md | Server Logic | drop | 2 | 1 | 100 | CLAUDE.md server patterns | Delete; duplicate |
| CUSTOMIZATION_GUIDE.md | Advanced Customization | drop | 2 | 1 | 100 | dataviz, artifact-design | Delete; generic design |
| starter.mdc | Project Structure | drop | 5 | 2 | 200 | CLAUDE.md project structure | Delete; exact duplicate |
| starter.mdc | Key Commands Reference | drop | 5 | 2 | 160 | CLAUDE.md key commands | Delete; exact duplicate |
| supabase-backup-manager.md | Task Metadata | drop | 2 | 2 | 120 | supabase skill | Delete; charter, not guidance |
| supabase-backup-manager.md | Backup Strategy | drop | 2 | 2 | 140 | CLAUDE.md governance | Delete; SRE scope |
| supabase-backup-manager.md | Storage Optimization | drop | 2 | 1 | 120 | Infrastructure/DevOps | Delete; SRE scope |
| supabase-schema-sync.md | Task Context & Status | drop | 2 | 2 | 120 | Standard shell knowledge | Delete; ad-hoc commands |
| supabase-data-explorer.md | Database Discovery | drop | 2 | 2 | 90 | code-review, security-review | Delete; generic DB exploration |
| supabase-data-explorer.md | Intelligent Querying | drop | 2 | 1 | 100 | supabase skill, perf optimization | Delete; too abstract |
| supabase-data-explorer.md | Data Analysis | drop | 2 | 2 | 100 | dataviz, code-review | Delete; generic analytics |
| supabase-data-explorer.md | Schema Inspection | drop | 2 | 2 | 100 | supabase skill, security-review | Delete; standard Postgres |
| supabase-type-generator.md | Schema Analysis & Discovery | drop | 2 | 1 | 850 | CLAUDE.md type generation | Delete; abstract/aspirational |
| supabase-performance-optimizer.md | Perf Analysis & Monitoring | skill | 2 | 2 | 480 | perf optimization, supabase | Add concrete EXPLAIN workflow |
| supabase-performance-optimizer.md | Index Optimization | skill | 2 | 3 | 380 | supabase, code-review | Add SQL for pg_stat_user_indexes |
| supabase-performance-optimizer.md | Storage & Data Optimization | skill | 2 | 2 | 370 | supabase (general) | Add archival patterns |
| supabase-performance-optimizer.md | DB Functions & Triggers | skill | 2 | 2 | 290 | code-review, supabase | Add trigger anti-patterns |
| supabase-backup-manager.md | Automated Backup | skill | 2 | 3 | 160 | None | Specify CLI commands |
| supabase-backup-manager.md | Recovery Procedures | skill | 3 | 3 | 150 | None | Add PITR commands |
| supabase-backup-manager.md | Schedule Management | skill | 2 | 3 | 130 | None | Specify cron format |
| supabase-backup-manager.md | Disaster Recovery | skill | 2 | 2 | 140 | None | Add test scenarios |
| supabase-migration-assistant.md | MCP Integration | drop | 2 | 1 | 60 | supabase skill, Bash | Delete; obsolete Cursor pattern |
| supabase-migration-assistant.md | Planning Principles | CLAUDE.md | 3 | 4 | 100 | CLAUDE.md migration section | Merge into migration workflow |
| supabase-migration-assistant.md | Code Generation | CLAUDE.md | 2 | 4 | 100 | CLAUDE.md migration + RLS | Add SQL template |
| supabase-migration-assistant.md | Validation Testing | skill | 2 | 3 | 85 | code-review, supabase | Add validation queries |
| supabase-migration-assistant.md | Type Generation & Sync | CLAUDE.md | 3 | 5 | 70 | CLAUDE.md type generation | Consolidate into single rule |
| supabase-migration-assistant.md | Rollback Strategy | skill | 2 | 4 | 90 | None (gap) | Add inverse SQL patterns |
| supabase-migration-assistant.md | Advanced Features | CLAUDE.md | 1 | 2 | 50 | CLAUDE.md type gen, scripts | Expand with examples |
| supabase-migration-assistant.md | Safety Measures | CLAUDE.md | 1 | 3 | 50 | CLAUDE.md migration rules | Add implementation steps |
| supabase-security-audit.md | Vulnerability Scanning | drop | 3 | 1 | 85 | security-review | Delete; too generic |
| supabase-security-audit.md | Auth Security Review | drop | 3 | 2 | 95 | CLAUDE.md auth, security-review | Delete; overlap |
| supabase-realtime-monitor.md | Connection & Subscription | skill | 2 | 2 | 180 | supabase skill, CLAUDE.md | Rewrite as debugging scenarios |
| supabase-schema-sync.md | Schema Sync Workflow | drop | 2 | 3 | 380 | supabase skill, CLAUDE.md | Delete; too abstract |
| supabase-schema-sync.md | Safety Checks | CLAUDE.md | 3 | 4 | 100 | CLAUDE.md RLS (partial) | Add backup/dry-run procedures |
| supabase-performance-optimizer.md | RLS Policy Performance | CLAUDE.md | 2 | 3 | 320 | CLAUDE.md RLS section | Add perf considerations |
| supabase-security-audit.md | RLS Policy Analysis | CLAUDE.md | 4 | 3 | 150 | CLAUDE.md RLS, security-review | Add test queries |
| supabase-security-audit.md | Permission Assessment | command | 4 | 4 | 110 | security-review (partial) | Add pg queries |
| supabase-security-audit.md | API Key Management | command | 4 | 4 | 110 | security-review (partial) | Add codebase search |
| supabase-security-audit.md | Data Protection | CLAUDE.md | 3 | 2 | 105 | None in CLAUDE.md | Add PII patterns |
| audit-codebase-quality.md | Identify Scope | drop | 3 | 2 | 320 | code-review skill | Delete; use /code-review |
| audit-codebase-quality.md | Code Quality 1-32 | drop | 4 | 1 | 1400 | code-review, dead-code, deslop | Delete; all skills cover this |
| audit-codebase-quality.md | Architecture 33-42 | drop | 3 | 2 | 580 | CLAUDE.md structure, security-review | Delete; use CLAUDE.md + /code-review |
| audit-codebase-quality.md | Documentation 43-52 | drop | 3 | 1 | 420 | None specific | Delete; maintenance task |
| audit-codebase-quality.md | Tech Stack 53-62 | drop | 2 | 2 | 480 | vercel:status, npm audit | Delete; use automated tools |
| audit-codebase-quality.md | Report & Findings | drop | 4 | 1 | 420 | code-review (ReportFindings) | Delete; code-review formats this |
| deslop.md | AI slop removal | drop | 4 | 3 | 95 | deslop, unslop skills | Delete; exact duplicate of built-ins |
| quick-diff-review.md | Identify Changes | drop | 4 | 3 | 150 | /code-review (auto-discovery) | Delete; automated by skill |
| quick-diff-review.md | Obvious Issues | drop | 5 | 4 | 120 | /code-review, /dead-code | Delete; use /code-review low |
| quick-diff-review.md | Code Smell Check | drop | 5 | 4 | 130 | /code-review, /simplify | Migrate thresholds to CLAUDE.md |
| quick-diff-review.md | Common Mistakes | drop | 5 | 4 | 130 | /code-review, /dead-code | Delete; specialized skills cover |
| quick-diff-review.md | Review Documentation | drop | 4 | 3 | 100 | CLAUDE.md, /code-review | Delete; project-specific docs |
| quick-diff-review.md | Review Summary | drop | 5 | 4 | 80 | /code-review (ReportFindings) | Delete; automated by skill |
| systematic-review.md | Review Init & Setup | drop | 3 | 2 | 130 | /code-review | Delete; automated |
| systematic-review.md | Code Quality Assessment | drop | 4 | 2 | 370 | /code-review, CLAUDE.md | Delete; covered |
| systematic-review.md | Security Review | drop | 4 | 2 | 150 | /security-review | Delete; dedicated skill |
| systematic-review.md | Testing Coverage | drop | 4 | 2 | 130 | /code-review, TDD skill | Delete; covered |
| systematic-review.md | Documentation Review | drop | 3 | 2 | 110 | /code-review, CLAUDE.md | Delete; covered |
| systematic-review.md | Review Consolidation | drop | 4 | 2 | 140 | /code-review --comment | Delete; automated |
| verify-task-impl.md | 5-Phase Workflow | skill | 4 | 2 | 150 | verification-before-completion | Drop; document checklist in CLAUDE.md |
| enforce-minimal-changes.md | Minimal Changes Principle | CLAUDE.md | 4 | 2 | 900 | None (gap) | Condense to 3 bullet rules |
| execute-task-list.md | Codebase Review | drop | 3 | 1 | 180 | CLAUDE.md, code-review | Delete; standard practice |
| execute-task-list.md | Optional User Details | drop | 4 | 1 | 80 | Standard model behavior | Delete; implicit |
| execute-task-list.md | Git Branch & Task Loading | skill | 5 | 3 | 280 | workflow-orchestration | Make path configurable |
| execute-task-list.md | Task Processing Loop | skill | 4 | 5 | 520 | code-review, commit | Remove Python-specific bits |
| execute-task-list.md | Issue Handling | skill | 5 | 4 | 200 | code-review, CLAUDE.md | Fold into task loop guards |
| execute-task-list.md | Final Review & Commit | skill | 5 | 4 | 200 | commit skill | Keep review, reference commit |
| refactor-recent-changes.md | Workflow Overview | command | 4 | 5 | 80 | None | Add success criteria |
| refactor-recent-changes.md | Identify Changed Files | command | 4 | 4 | 170 | Bash/git | Specify dependency tracing |
| refactor-recent-changes.md | Assessment Criteria | CLAUDE.md | 5 | 4 | 290 | code-review (partial) | Add scoring matrix |
| refactor-recent-changes.md | Perform Refactors | skill | 5 | 5 | 360 | dead-code, simplify | Orchestrate built-in skills |
| refactor-recent-changes.md | Document Changes | CLAUDE.md | 3 | 2 | 140 | CLAUDE.md type gen | Rewrite for Claude Code |
| refactor-recent-changes.md | Present Changes | command | 4 | 5 | 160 | None | Add npm test verification |
| scaffold-new-feature.md | Planning & Scope | skill | 4 | 3 | 280 | plan-feature, brainstorming | Specialize for Next.js+Supabase |
| scaffold-new-feature.md | Directory Structure | drop | 4 | 1 | 200 | CLAUDE.md project structure | Delete; misaligned structure |
| scaffold-new-feature.md | Types & Interfaces | CLAUDE.md | 4 | 4 | 150 | CLAUDE.md type gen | Show Database type composition |
| scaffold-new-feature.md | Base Components | CLAUDE.md | 4 | 3 | 180 | CLAUDE.md UI section | Add shadcn/ui composition |
| scaffold-new-feature.md | Routing Setup | CLAUDE.md | 3 | 2 | 140 | CLAUDE.md auth pattern | Replace with App Router specifics |
| scaffold-new-feature.md | Utilities & Helpers | CLAUDE.md | 5 | 4 | 100 | CLAUDE.md lib/utils | Add Zod reference |
| scaffold-new-feature.md | Testing Setup | CLAUDE.md | 4 | 3 | 200 | CLAUDE.md Vitest section | Cross-reference |
| scaffold-new-feature.md | Docs & Verification | command | 5 | 4 | 200 | verification-before-completion | Extract as verify-scaffold |
| resume-current-task.md | Assess Current State | drop | 4 | 2 | 65 | Model default | Delete; native behavior |
| resume-current-task.md | Continue Execution | skill | 4 | 4 | 80 | None | Add retrieval step |
| resume-current-task.md | Verify Completion | drop | 4 | 3 | 60 | verification-before-completion | Delete; duplicate |
| analyze-nextjs-bundle.md | Setup & Tooling | drop | 4 | 2 | 1200 | vercel:nextjs | Delete; standard setup |
| analyze-nextjs-bundle.md | Analysis Execution | drop | 4 | 1 | 2100 | code-review | Delete; ad-hoc interpretation |
| analyze-nextjs-bundle.md | Optimization Identification | drop | 4 | 1 | 1300 | code-review, dead-code, deslop | Delete; built-in skills |
| analyze-nextjs-bundle.md | Recommendations & ROI | drop | 4 | 1 | 1400 | code-review priority matrix | Delete; code-review output |
| analyze-nextjs-bundle.md | Report & Action Plan | drop | 5 | 1 | 1200 | code-review reporting | Delete; use /code-review |
| analyze-nextjs-bundle.md | Webpack & Package Optimization | skill | 4 | 4 | 1600 | vercel:next-forge (minimal) | Extract as reusable skill |
| analyze-nextjs-bundle.md | CI/CD Monitoring | skill | 4 | 4 | 1100 | vercel:deployments-cicd (minimal) | Extract as standalone skill |
| audit-nextjs-performance.md | Full 9-Step Audit | skill | 4 | 4 | 4800 | CLAUDE.md perf, code-review | Modernize to Next.js 15.3 |
| create-nextjs-middleware.md | Project Analysis | drop | 3 | 2 | 400 | Native code reading | Delete; ad-hoc |
| create-nextjs-middleware.md | Directory Structure | CLAUDE.md | 5 | 5 | 250 | None | Add to project structure |
| create-nextjs-middleware.md | Main Middleware | skill | 4 | 4 | 600 | None | Adapt for Supabase auth |
| create-nextjs-middleware.md | Auth Middleware (JWT) | drop | 4 | 1 | 550 | CLAUDE.md Supabase auth | Delete; conflicts with Supabase |
| create-nextjs-middleware.md | Rate Limiting | skill | 4 | 4 | 450 | None | Add Redis/Upstash note |
| create-nextjs-middleware.md | Security Headers | CLAUDE.md | 5 | 5 | 350 | None | Add as core principle |
| create-nextjs-middleware.md | CORS | skill | 4 | 4 | 300 | None | Note Supabase handles API CORS |
| create-nextjs-middleware.md | Redirects/Rewrites | skill | 4 | 4 | 350 | None | Add next.config.js comparison |
| create-nextjs-middleware.md | Advanced (A/B, Flags, Geo, Bot) | drop | 3 | 2 | 400 | Third-party services | Delete; niche |
| create-nextjs-middleware.md | Middleware Composition | CLAUDE.md | 4 | 5 | 250 | None | Add as architecture pattern |
| create-nextjs-middleware.md | Type Definitions | drop | 3 | 1 | 200 | Implementation detail | Delete; fold into features |
| create-nextjs-middleware.md | Testing Suite | CLAUDE.md | 4 | 5 | 400 | CLAUDE.md Vitest section | Add middleware test patterns |
| create-nextjs-middleware.md | Monitoring | drop | 2 | 1 | 200 | Vercel Analytics | Delete; use Vercel |
| create-nextjs-middleware.md | Documentation | drop | 3 | 1 | 200 | Standard practice | Delete; generic |
| create-nextjs-middleware.md | Deployment Validation | CLAUDE.md | 5 | 5 | 250 | None | Add to dev workflow |
| create-nextjs-middleware.md | Implementation Report | drop | 3 | 1 | 200 | Skill output | Delete; fold into skill |
| generate-nextjs-component.md | Project Analysis | command | 3 | 3 | 650 | CLAUDE.md (stack known) | Simplify to project defaults |
| generate-nextjs-component.md | File Organization | command | 5 | 5 | 250 | CLAUDE.md project structure | No fix needed |
| generate-nextjs-component.md | Component Code Gen | command | 5 | 5 | 950 | CLAUDE.md Server-First | Default to Server Components |
| generate-nextjs-component.md | Styling | command | 4 | 4 | 550 | CLAUDE.md Tailwind v4 | Remove CSS Modules branch |
| generate-nextjs-component.md | Type Safety | command | 4 | 4 | 400 | CLAUDE.md type safety | Add shadcn/ui prop extending |
| generate-nextjs-component.md | Unit Tests | command | 5 | 4 | 650 | CLAUDE.md Vitest | Integrate with TDD skill |
| generate-nextjs-component.md | Storybook & Docs | command | 4 | 3 | 450 | None | Make Storybook conditional |
| generate-nextjs-component.md | Framework Setup | command | 5 | 5 | 600 | CLAUDE.md Next.js patterns | Default --server |
| generate-nextjs-component.md | Accessibility & Perf | CLAUDE.md | 5 | 5 | 900 | None (gap) | Add as project best practice |
| generate-nextjs-component.md | Validation & Reporting | command | 4 | 4 | 500 | code-review | Automate validation steps |
| generate-vercel-edge.md | Project Analysis | command | 4 | 4 | 500 | vercel:status (partial) | Add edge runtime check |
| generate-vercel-edge.md | Base Edge Structure | command | 4 | 4 | 450 | CLAUDE.md (partial) | Add edge API constraints |
| generate-vercel-edge.md | Geolocation (--geo) | command | 5 | 5 | 350 | None | Note local testing needs mocks |
| generate-vercel-edge.md | Authentication (--auth) | command | 5 | 5 | 400 | CLAUDE.md auth (partial) | Add env var validation |
| generate-vercel-edge.md | Transformation (--transform) | command | 5 | 5 | 300 | None | Add content negotiation |
| generate-vercel-edge.md | Proxy & Caching (--proxy) | command | 5 | 5 | 350 | None | Add SSRF prevention |
| generate-vercel-edge.md | Supporting Files | command | 4 | 4 | 250 | CLAUDE.md testing | Conditional file gen by flag |
| generate-vercel-edge.md | Performance Optimizations | skill | 4 | 3 | 280 | code-review, perf | Clarify rate limit strategy |
| generate-vercel-edge.md | Documentation & Examples | command | 3 | 4 | 200 | None | Provide README template |
| generate-vercel-edge.md | Validation & Testing | command | 4 | 4 | 250 | code-review, TDD | Focus on edge-specific checks |
| generate-vercel-edge.md | Deployment Config | command | 4 | 4 | 200 | vercel:deploy, vercel:env | Reference existing skills |
| generate-vercel-edge.md | Post-Gen Report | command | 4 | 4 | 150 | None | Add file tree template |
| migrate-nextjs-project.md | Pre-Migration Analysis | skill | 4 | 4 | 400 | code-review (partial) | Add conditional branching |
| migrate-nextjs-project.md | Pages to App Router | skill | 5 | 4 | 800 | CLAUDE.md (already App Router) | Add post-migration diff |
| migrate-nextjs-project.md | JS to TS Migration | drop | 4 | 2 | 350 | Model knowledge, CLAUDE.md | Delete; standard knowledge |
| migrate-nextjs-project.md | Class to Functional | drop | 5 | 1 | 250 | code-review, simplify | Delete; model knowledge |
| migrate-nextjs-project.md | Validation & Testing | CLAUDE.md | 3 | 3 | 200 | CLAUDE.md Vitest, code-review | Add migration-specific checks |
| migrate-nextjs-project.md | Cleanup & Optimization | CLAUDE.md | 3 | 2 | 180 | dead-code, CLAUDE.md | Add project-specific config |
| migrate-nextjs-project.md | Report Generation | skill | 2 | 2 | 150 | verification-before-completion | Add markdown template |
| migrate-nextjs-project.md | Post-Migration Tasks | drop | 2 | 1 | 120 | vercel:deploy, general DevOps | Delete; organizational, not code |
| optimize-vercel-deployment.md | Pre-Deploy Validation | skill | 5 | 4 | 800 | code-review, vercel:env | Automate config parsing |
| optimize-vercel-deployment.md | Config Optimization | CLAUDE.md | 4 | 5 | 1200 | Vercel/Next.js docs | Add copy-paste configs |
| optimize-vercel-deployment.md | Build Optimization | drop | 5 | 2 | 400 | code-review, npm scripts | Delete; standard workflow |
| optimize-vercel-deployment.md | Monitoring Setup | skill | 5 | 4 | 500 | None | Provide copy-paste code |
| optimize-vercel-deployment.md | Deployment Execution | drop | 5 | 1 | 600 | vercel:deploy | Delete; 100% duplicate |
| optimize-vercel-deployment.md | Post-Deploy Validation | command | 4 | 4 | 700 | vercel:status (partial) | Automate health checks |
| optimize-vercel-deployment.md | Perf Monitoring | drop | 2 | 1 | 400 | Vercel Analytics dashboard | Delete; use dashboard |
| optimize-vercel-deployment.md | Rollback Strategy | CLAUDE.md | 5 | 4 | 500 | None (gap) | Document as incident procedure |
| optimize-vercel-deployment.md | Deployment Report | drop | 3 | 1 | 450 | Vercel API, GitHub | Delete; manual |
| optimize-vercel-deployment.md | Optimization Recs | drop | 1 | 1 | 300 | General knowledge | Delete; strategic, not code |
| scaffold-nextjs-app.md | Environment & Init | skill | 4 | 4 | 380 | vercel:bootstrap (partial) | Add error handling |
| scaffold-nextjs-app.md | Next.js & TS Config | skill | 4 | 3 | 420 | CLAUDE.md (partial) | Add decision tree |
| scaffold-nextjs-app.md | Directory Scaffold | CLAUDE.md | 4 | 3 | 250 | CLAUDE.md project structure | Add env template |
| scaffold-nextjs-app.md | Starter Components | drop | 3 | 2 | 180 | vercel:next-forge, CLAUDE.md | Delete; create-next-app handles |
| scaffold-nextjs-app.md | Dev Scripts & Hooks | CLAUDE.md | 4 | 3 | 200 | CLAUDE.md key commands | Add Husky for Supabase |
| scaffold-nextjs-app.md | Documentation | drop | 2 | 1 | 180 | Generic practice | Delete; project-specific |
| scaffold-nextjs-app.md | Validation & Testing | skill | 4 | 4 | 220 | verification-before-completion | Add thresholds |
| scaffold-nextjs-app.md | Report & Checklist | drop | 3 | 1 | 240 | None | Delete; fold into skill output |
| sync-vercel-env.md | Environment Setup | drop | 4 | 2 | 400 | vercel:env | Delete; built-in handles |
| sync-vercel-env.md | Pull from Vercel | drop | 4 | 1 | 300 | vercel:env pull | Delete; exact duplicate |
| sync-vercel-env.md | Push to Vercel | drop | 4 | 1 | 350 | vercel:env push | Delete; exact duplicate |
| sync-vercel-env.md | Validate Env Vars | skill | 5 | 4 | 350 | security-review (partial) | Auto-run after sync |
| sync-vercel-env.md | Backup & Restore | skill | 4 | 4 | 300 | None | Add auto-cleanup |
| sync-vercel-env.md | Environment Diff | skill | 4 | 4 | 250 | None | Integrate as pre-push |
| sync-vercel-env.md | Generate Template | skill | 4 | 4 | 250 | None | Smart category detection |
| sync-vercel-env.md | Automation & CI | CLAUDE.md | 3 | 3 | 200 | CLAUDE.md (partial) | Add GitHub Actions YAML |
| sync-vercel-env.md | Monitoring & Reporting | drop | 3 | 2 | 150 | General logging | Delete; fold cleanup into backup |
| test-nextjs-api-routes.md | API Route Discovery | skill | 4.5 | 4.5 | 1200 | code-review (partial) | Add Supabase patterns |
| test-nextjs-api-routes.md | Test Suite Generation | skill | 4 | 4.5 | 2400 | TDD skill (partial) | Align with Vitest + Supabase |
| test-nextjs-api-routes.md | Performance Testing | skill | 3.5 | 3.5 | 600 | perf optimization | Add tooling recs |
| test-nextjs-api-routes.md | Manual Testing Cmds | CLAUDE.md | 5 | 0 | 500 | None (gap) | Add Supabase auth examples |
| test-nextjs-api-routes.md | Test Fixtures | CLAUDE.md | 4 | 0 | 700 | CLAUDE.md Vitest (partial) | Add Supabase typed fixtures |
| test-nextjs-api-routes.md | Test Env & Config | CLAUDE.md | 4 | 0 | 800 | CLAUDE.md Vitest section | Enhance, don't duplicate |
| test-nextjs-api-routes.md | Collection Generation | command | 3.5 | 4 | 700 | None | Add Supabase auth headers |
| test-nextjs-api-routes.md | CI Testing | skill | 4 | 4 | 600 | vercel:deployments-cicd | Add Supabase test DB |
| test-nextjs-api-routes.md | Test Reporting | drop | 4 | 1 | 600 | code-review | Delete; fold into skills |
| analyze-pr-quality.md | PR Checkout & Diff | drop | 5 | 3 | 380 | /code-review, pr-review-toolkit | Delete; automated |
| analyze-pr-quality.md | Analysis Criteria | CLAUDE.md | 4 | 4 | 620 | code-review (partial) | Condense to 8-10 items |
| analyze-pr-quality.md | Report Template | drop | 5 | 2 | 540 | /code-review (ReportFindings) | Delete; automated |
| analyze-pr-quality.md | Quality Standards | CLAUDE.md | 5 | 5 | 280 | CLAUDE.md (partial) | Add as review standards |
| analyze-pr-quality.md | Success Criteria | drop | 5 | 1 | 140 | /code-review | Delete; automated |
| create-github-pr.md | Pre-PR Validation | drop | 4 | 2 | 400 | Built-in git, Bash | Delete; standard git |
| create-github-pr.md | Gather Context | command | 4 | 4 | 300 | None | Convert to prompt flow |
| create-github-pr.md | PR Title Conventions | CLAUDE.md | 5 | 5 | 200 | None (gap) | Add with examples |
| create-github-pr.md | PR Description Structure | CLAUDE.md | 5 | 5 | 300 | None (gap) | Add template |
| create-github-pr.md | Testing Instructions | CLAUDE.md | 5 | 4 | 250 | TDD skill (partial) | Add format template |
| create-github-pr.md | Readiness Checklist | CLAUDE.md | 5 | 5 | 150 | None (gap) | Add as checklist |
| create-github-pr.md | Visual Aids | drop | 4 | 2 | 100 | Common knowledge | Delete; obvious |
| create-github-pr.md | GitHub Submission | command | 5 | 4 | 350 | commit-push-pr (verify) | Check overlap |
| create-github-pr.md | Post-Submission | CLAUDE.md | 4 | 3 | 150 | None | Add as workflow |
| pr-summary-description.md | Summary Structure | skill | 5 | 4 | 400 | pr-review-toolkit (verify) | Extract as standalone |
| implement-pr-feedback.md | Main Workflow | command | 4 | 4 | 1200 | receiving-code-review | Replace tool references |
| implement-pr-feedback.md | Error Handling | command | 5 | 5 | 150 | None | Add proactive detection |
| implement-pr-feedback.md | Best Practices | CLAUDE.md | 5 | 3 | 100 | CLAUDE.md (partial) | Split: 10 CLAUDE.md, 4 command |
| review-pr-gh-cli.md | Task Objective & Style | command | 4 | 4 | 150 | None | Shorten intro |
| review-pr-gh-cli.md | 6-Step Workflow | command | 5 | 5 | 800 | /code-review (partial) | Reference /code-review for Step 3 |
| review-pr-gh-cli.md | CLI Reference | drop | 5 | 0 | 200 | gh --help | Delete; standard docs |
| review-pr-gh-cli.md | Comment Styles | command | 5 | 3 | 250 | None | Integrate into Step 5 |
| review-pr-gh-cli.md | Success Criteria | command | 4 | 4 | 100 | None | Add gh exit code check |
| starter.mdc | Core Principles | drop | 4 | 5 | 620 | CLAUDE.md (exact match) | Delete; full duplicate |
| starter.mdc | Migration-First Dev | drop | 5 | 5 | 520 | CLAUDE.md (exact match) | Delete; full duplicate |
| starter.mdc | Next.js 15.3 Patterns | drop | 5 | 4 | 480 | CLAUDE.md (exact match) | Delete; full duplicate |
| starter.mdc | Auth Pattern | drop | 5 | 3 | 360 | CLAUDE.md (exact match) | Delete; full duplicate |
| starter.mdc | UI Components | drop | 5 | 4 | 540 | CLAUDE.md (exact match) | Delete; full duplicate |
| starter.mdc | Real-time Subscriptions | drop | 5 | 4 | 280 | CLAUDE.md (exact match) | Delete; full duplicate |
| starter.mdc | Testing Infrastructure | drop | 5 | 4 | 810 | CLAUDE.md (exact match) | Delete; full duplicate |
| starter.mdc | Database Patterns | drop | 5 | 4 | 320 | CLAUDE.md (exact match) | Delete; full duplicate |
| starter.mdc | Performance Optimization | drop | 5 | 4 | 220 | CLAUDE.md (exact match) | Delete; full duplicate |
| starter.mdc | Dev Workflow & Env | drop | 5 | 4 | 280 | CLAUDE.md (exact match) | Delete; full duplicate |
| starter.mdc | Critical Rules Summary | drop | 5 | 5 | 180 | CLAUDE.md Critical Rules | Delete; full duplicate |
| comprehensive-pr-review.md | Review Context & Tone | CLAUDE.md | 5 | 5 | 650 | None (gap) | Extract voice + philosophy |
| comprehensive-pr-review.md | Priority Focus Areas | CLAUDE.md | 5 | 5 | 220 | /code-review (partial) | Add as systematic questions |
| comprehensive-pr-review.md | Comment Templates | CLAUDE.md | 5 | 5 | 350 | None | Add as feedback templates |
| comprehensive-pr-review.md | Review Checklists | skill | 4 | 4 | 450 | /code-review, /security-review | Create review-checklists skill |
| comprehensive-pr-review.md | GitHub Workflow | drop | 4 | 2 | 350 | /code-review | Delete; outdated MCP refs |
| comprehensive-pr-review.md | Multi-Pass Methodology | CLAUDE.md | 5 | 5 | 280 | None (gap) | Add as review methodology |
| comprehensive-pr-review.md | Frontend Examples | skill | 5 | 4 | 3200 | /code-review (partial) | Create frontend-review skill |
| comprehensive-pr-review.md | Backend Examples | skill | 5 | 4 | 2600 | /code-review (partial) | Create backend-review skill |
| comprehensive-pr-review.md | Infrastructure Examples | skill | 4 | 4 | 1800 | /code-review, /security-review | Create infra-review skill |

---

## 2. Proposed Target Layout

### CLAUDE.md Additions

Add these sections to the project CLAUDE.md. Estimated net token addition: ~3,500 tokens (after condensing).

#### A. Minimal Changes Principle (new Critical Rule #12)

```
12. **Apply the Minimal Changes Principle**
   - Only change what the task requires; no reformatting unrelated lines
   - Bug fixes: fix the bug, nothing else; features: minimize integration refactoring
   - Validate each changed line has a clear purpose tied to the task
```

Source: `enforce-minimal-changes-principle.md`

#### B. Code Review Voice and Methodology (new section)

```
## Code Review Standards

### Review Voice
- Direct, constructive, pragmatic. No softening hedges.
- Characteristic phrases: "Can we be more specific than dict?", "Invert and bail", "This reads better as..."
- Priority weighting: Type Safety=5, Comments=5, Utilities=5, Readability=4, Performance=3

### Multi-Pass Methodology
1. First Pass: Existing patterns, design helpers, theme usage
2. Second Pass: Type safety, any/dict, optional chaining
3. Third Pass: Code quality, comments, nesting depth
4. Fourth Pass: Performance, cache invalidation, formatting

### 10 Systematic Review Questions
1. Are comments adding value or just noise?
2. Are types as specific as possible (no `any`, no bare `dict`)?
3. Are project utilities leveraged (cn(), design tokens)?
4. Is optional chaining used where appropriate?
5. Is the structure flat (early returns, guard clauses)?
6. Is naming consistent with existing codebase?
7. Are UX edge cases handled (loading, error, empty)?
8. Are there performance concerns (re-renders, N+1)?
9. Are URLs constructed safely?
10. Is formatting consistent with project style?

### Feedback Templates
- Types: "Can we be more specific than [type]? Consider [alternative]"
- Utilities: "We have [util] that handles this — check lib/utils"
- Nesting: "Invert and bail — early return makes this cleaner"
- Readability: "Extract this block — it does [X] and deserves a name"

### Quality Standards Checklist
- [ ] Specific: file names, line numbers, concrete examples
- [ ] Constructive: includes suggestion, explains reasoning
- [ ] Actionable: severity assigned, clear next steps
- [ ] Complete: covers bugs, security, tests, architecture
```

Source: `perform-comprehensive-pr-review.md` (Tone, Priority, Multi-Pass, Templates, Quality Standards sections)

#### C. PR Conventions (new section)

```
## Pull Request Conventions

### Title Format
- Pattern: `[TICKET-123] Add user profile editing` (present tense, 50-72 chars)
- Be specific: "Fix race condition in auth refresh" not "Fix bug"

### Description Template
- **Summary**: What problem this solves and how
- **Changes**: Bullet list of modifications
- **Breaking Changes**: Migration steps if any (prefix with warning)
- **Testing**: Numbered steps to verify; include edge cases

### Readiness Checklist
- [ ] Tests pass (`npm run test`)
- [ ] Types check (`tsc --noEmit`)
- [ ] Linter clean (`npm run lint`)
- [ ] No sensitive data committed
- [ ] Up-to-date with base branch
- [ ] Breaking changes documented
- [ ] Migrations committed with types
```

Source: `create-github-pull-request.md` (Title, Description, Testing, Checklist sections)

#### D. Refactoring Assessment Criteria (new subsection under Development Workflow)

```
### Refactoring Decision Criteria
When reviewing code for refactoring opportunities:
- **File size**: Target <500 lines per file; split if larger
- **Single Responsibility**: Each file/function should have one clear purpose
- **Coupling**: Minimize cross-module dependencies; prefer composition
- **Dead code**: Remove unused imports, functions, and variables
- **API surface**: Simplify public interfaces; hide implementation details
Priority: High (>500 lines or SRP violation) > Medium (coupling) > Low (dead code cleanup)
```

Source: `refactor-recent-changes.md` (Assessment Criteria section)

#### E. Security Headers (new subsection under Core Principles)

```
### Security Headers (Middleware)
All deployments must include these headers via middleware:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- Content-Security-Policy: configure per deployment
```

Source: `create-nextjs-middleware.md` (Security Headers section)

#### F. Middleware Architecture (new subsection under Project Structure)

```
### Middleware Organization
middleware.ts (root)
lib/middleware/
  auth.ts        # Supabase session validation
  security.ts    # Security headers
  compose.ts     # Chain multiple middleware functions
  types.ts       # Shared middleware types

Composition order: security -> rate-limit -> auth -> redirects
```

Source: `create-nextjs-middleware.md` (Directory Structure, Composition sections)

#### G. Accessibility Best Practices (new subsection)

```
### Accessibility Requirements
- Use semantic HTML elements (`nav`, `main`, `article`, `button`)
- Include ARIA attributes: `aria-label`, `aria-describedby`, `role` where needed
- Ensure keyboard navigation: tab order, Enter/Space handlers on interactive elements
- Provide visible focus indicators (outline, ring) on all focusable elements
- Include alt text on images; use `sr-only` for screen-reader-only content
```

Source: `generate-nextjs-component.md` (Accessibility section)

#### H. Vercel Configuration Patterns (new subsection under Development Workflow)

```
### Vercel Deployment Configuration
- Image optimization: formats ['image/avif', 'image/webp']
- Caching: s-maxage=31536000 for static, stale-while-revalidate for ISR
- Rollback procedure: `vercel ls` -> identify stable -> `vercel rollback [deployment-id]`
- Pre-deploy validation: `npm run build && tsc --noEmit && npm run lint && npm run test`
```

Source: `optimize-vercel-deployment.md` (Config Optimization, Rollback Strategy sections)

#### I. RLS Performance Considerations (addition to existing RLS section)

```
### RLS Performance Tips
- Use indexed columns in RLS policy WHERE clauses
- Consolidate redundant policies on the same table
- Run `EXPLAIN ANALYZE` on queries against RLS-protected tables to measure policy overhead
- Avoid subqueries in policies; prefer joins or materialized role lookups
```

Source: `supabase-performance-optimizer.md` (RLS Policy Performance), `supabase-security-audit.md` (RLS Policy Analysis)

#### J. API Testing Reference (addition to Testing section)

```
### API Route Testing
Manual testing with cURL:
  curl -s http://localhost:3000/api/posts | jq
  curl -X POST http://localhost:3000/api/posts -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"title":"Test"}'

Test fixtures: use Supabase generated types for typed mock data:
  const mockPost: Database['public']['Tables']['posts']['Row'] = { ... }
```

Source: `test-nextjs-api-routes.md` (Manual Testing, Fixtures sections)

#### K. Migration Safety Additions (addition to existing migration section)

```
### Pre-Migration Safety
- Always test locally first: `supabase db reset` before `supabase db push`
- Create backup before destructive migrations: `supabase db dump > backup.sql`
- For rollbacks: write inverse migration (DROP COLUMN for ADD COLUMN, etc.)
- Dry-run validation: review `supabase db diff` output before applying
```

Source: `supabase-migration-assistant.md` (Safety Measures, Rollback), `supabase-schema-sync.md` (Safety Checks)

---

### Skills to Create

#### 1. `review-checklists`
- **Description**: Structured checklists for comprehensive multi-layer PR reviews covering frontend (React/TypeScript), backend (Python), and infrastructure (Docker/Helm/config).
- **Triggers**: "comprehensive review", "full-stack review", "code review checklist", "systematic pr review"
- **Consolidates**: `perform-comprehensive-pr-review.md` (Review Checklists FE01-11, BE01-08, INF01-05)
- **Estimated tokens**: ~450

#### 2. `frontend-review-patterns`
- **Description**: 11 frontend code review patterns with bad/good examples for React/TypeScript. Covers comments, design system usage, utilities, structure, types, URLs, performance, UX, and accessibility.
- **Triggers**: "frontend review", "react review", "typescript review", "component review"
- **Consolidates**: `perform-comprehensive-pr-review.md` (Frontend Examples FE01-FE11)
- **Estimated tokens**: ~3,200

#### 3. `backend-review-patterns`
- **Description**: 8 backend code review patterns for Python. Covers environment handling, queries, types, constants, error handling, deprecation, and readability.
- **Triggers**: "backend review", "python review", "server review"
- **Consolidates**: `perform-comprehensive-pr-review.md` (Backend Examples BE01-BE08)
- **Estimated tokens**: ~2,600

#### 4. `infra-review-patterns`
- **Description**: 5 infrastructure review patterns for Docker, Helm, and deployment configs. Covers config consistency, secrets, constraints, tools, and file organization.
- **Triggers**: "infrastructure review", "docker review", "infra patterns"
- **Consolidates**: `perform-comprehensive-pr-review.md` (Infrastructure Examples INF01-INF05)
- **Estimated tokens**: ~1,800

#### 5. `nextjs-webpack-optimization`
- **Description**: Configure Next.js Webpack for smaller bundles: splitChunks, modularizeImports, scope hoisting, compression, tree-shaking, and next.config.js patterns.
- **Triggers**: "webpack optimization", "splitchunks config", "tree-shaking setup", "optimize bundle chunks"
- **Consolidates**: `analyze-nextjs-bundle.md` (Webpack & Package Optimization section)
- **Estimated tokens**: ~1,600

#### 6. `bundle-monitoring-ci`
- **Description**: Set up automated bundle size monitoring in CI/CD: performance budgets, GitHub Actions workflow, Lighthouse CI, PR comments with size deltas, regression alerts.
- **Triggers**: "setup bundle monitoring", "automated bundle checks", "prevent bundle regression", "performance budget"
- **Consolidates**: `analyze-nextjs-bundle.md` (CI/CD Monitoring section)
- **Estimated tokens**: ~1,100

#### 7. `nextjs-performance-audit`
- **Description**: Run a comprehensive performance audit: Lighthouse scores, Core Web Vitals, bundle analysis, resource optimization, server-side checks, prioritized recommendations.
- **Triggers**: "audit performance", "performance audit", "Lighthouse audit", "Core Web Vitals", "bundle review"
- **Consolidates**: `audit-nextjs-performance.md` (entire file, modernized for Next.js 15.3)
- **Estimated tokens**: ~4,800

#### 8. `nextjs-middleware-generator`
- **Description**: Generate production-ready Next.js middleware with configurable features: rate limiting, CORS, redirects/rewrites. Modular architecture with TypeScript types and tests.
- **Triggers**: "create middleware", "add middleware", "rate limiting middleware", "CORS middleware"
- **Consolidates**: `create-nextjs-middleware.md` (Main Middleware, Rate Limiting, CORS, Redirects sections)
- **Estimated tokens**: ~1,700

#### 9. `execute-task-list`
- **Description**: Execute a task list from a file, processing each task sequentially with code review, testing, and git commits. Includes error handling and final summary.
- **Triggers**: "execute task list", "process tasks sequentially", "run batch of tasks"
- **Consolidates**: `execute-task-list.md` (Git Branch, Task Processing, Issue Handling, Final Review)
- **Estimated tokens**: ~1,200

#### 10. `focused-refactor`
- **Description**: Orchestrate focused refactoring of recently changed files: split large files (<500 lines), remove dead code, simplify APIs, reorganize modules. Composes built-in dead-code and simplify skills.
- **Triggers**: "refactor recent changes", "clean up recent work", "split large files"
- **Consolidates**: `refactor-recent-changes.md` (Perform Focused Refactors section)
- **Estimated tokens**: ~360

#### 11. `env-validate`
- **Description**: Validate environment variables against project rules: required vars, pattern matching, placeholder detection, .gitignore verification. Reports by severity with fix suggestions.
- **Triggers**: "validate environment", "check env config", "verify secrets"
- **Consolidates**: `sync-vercel-environment.md` (Validate section)
- **Estimated tokens**: ~350

#### 12. `env-backup-restore`
- **Description**: Create, list, and restore timestamped backups of local .env files and Vercel environments. Includes integrity checks and auto-cleanup.
- **Triggers**: "backup env", "restore environment", "rollback env"
- **Consolidates**: `sync-vercel-environment.md` (Backup & Restore section)
- **Estimated tokens**: ~300

#### 13. `env-diff`
- **Description**: Compare local environment files with Vercel remote. Shows added/removed/modified variables with masked sensitive values. Pre-push verification.
- **Triggers**: "compare environments", "env diff", "show env changes"
- **Consolidates**: `sync-vercel-environment.md` (Diff section)
- **Estimated tokens**: ~250

#### 14. `env-template-generate`
- **Description**: Generate .env.example from existing vars, grouped by category with comments and placeholder values. Safe to commit.
- **Triggers**: "generate env template", "create .env.example"
- **Consolidates**: `sync-vercel-environment.md` (Template Generation section)
- **Estimated tokens**: ~250

#### 15. `api-route-test-generator`
- **Description**: Analyze Next.js API routes and generate comprehensive test suites covering CRUD, auth, validation, error handling, and performance. Aligned with Vitest and Supabase mocks.
- **Triggers**: "generate api tests", "test api endpoint", "write api route tests"
- **Consolidates**: `test-nextjs-api-routes.md` (Discovery, Suite Generation, Performance sections)
- **Estimated tokens**: ~4,200

#### 16. `pre-deploy-validate`
- **Description**: Run comprehensive pre-deployment validation: git state, project config, env vars, build, type-check, lint, tests. Ensures all prerequisites met.
- **Triggers**: "pre-deployment validation", "check before deploying", "validate deployment"
- **Consolidates**: `optimize-vercel-deployment.md` (Pre-Deploy Validation section)
- **Estimated tokens**: ~800

#### 17. `vercel-monitoring-setup`
- **Description**: Install and configure Vercel Analytics and Speed Insights, add monitoring to layout, set up Web Vitals tracking.
- **Triggers**: "setup monitoring", "enable vercel analytics", "configure performance tracking"
- **Consolidates**: `optimize-vercel-deployment.md` (Monitoring Setup section)
- **Estimated tokens**: ~500

#### 18. `nextjs-migration-analyzer`
- **Description**: Analyze a Next.js project for migration readiness: detect routing patterns, version gaps, and compatibility blockers with effort estimates.
- **Triggers**: "audit nextjs for migration", "analyze migration readiness"
- **Consolidates**: `migrate-nextjs-project.md` (Pre-Migration Analysis section)
- **Estimated tokens**: ~400

#### 19. `pages-to-app-router`
- **Description**: Convert a Next.js Pages Router project to App Router: migrate pages, API routes, dynamic segments, and data fetching patterns with validation.
- **Triggers**: "migrate pages router", "convert to app router"
- **Consolidates**: `migrate-nextjs-project.md` (Pages to App Router section)
- **Estimated tokens**: ~800

---

### Commands to Create

#### 1. `/generate-component`
- **Purpose**: Scaffold a new Next.js component with types, tests, accessibility, and optional Storybook stories. Supports --server (default), --client, --page, --layout flags.
- **Source**: `generate-nextjs-component.md` (all sections)
- **Key behavior**: Defaults to Server Component; uses Tailwind v4 only; generates Vitest tests; validates with tsc + lint.

#### 2. `/generate-edge-function`
- **Purpose**: Scaffold a Vercel Edge Function with configurable features (--auth, --geo, --transform, --proxy). Generates types, utils, tests, and deployment config.
- **Source**: `generate-vercel-edge-function.md` (all sections)

#### 3. `/validate-deployment`
- **Purpose**: Post-deployment validation: health checks, Core Web Vitals, Lighthouse audit, security headers, critical user flows.
- **Source**: `optimize-vercel-deployment.md` (Post-Deploy Validation section)

#### 4. `/implement-pr-feedback`
- **Purpose**: Systematically implement PR review comments: fetch comments via gh CLI, categorize, apply changes, verify, report.
- **Source**: `implement-pr-review-feedback.md` (Main Workflow, Error Handling)

#### 5. `/gh-pr-review`
- **Purpose**: User-guided PR review via gh CLI: gather context, analyze changes (delegates to /code-review), get user decision, draft comment, submit review.
- **Source**: `review-pr-with-gh-cli.md` (6-Step Workflow, Comment Styles)

#### 6. `/generate-api-collection`
- **Purpose**: Generate Postman/Thunder Client/Insomnia collections from API route analysis. Includes auth headers, environment vars, assertions.
- **Source**: `test-nextjs-api-routes.md` (Collection Generation section)

#### 7. `/refactor-recent`
- **Purpose**: Identify recently changed files via git diff, assess refactoring needs, perform focused refactors (<500 line target), verify behavioral equivalence.
- **Source**: `refactor-recent-changes.md` (Workflow Overview, Identify, Present sections)

---

### Drop List

**Files to delete entirely** (all sections marked "drop"):

| File | Reason |
|------|--------|
| `CUSTOMIZATION_GUIDE-audit.md` | 100% generic checklist; no section survives audit. Standard Next.js rebranding knowledge. |
| `.cursor/rules/starter.mdc` | 100% duplicate of CLAUDE.md. Every section is an exact content match (~5,600 tokens wasted). |
| `.cursor/commands/code-review/audit-codebase-quality.md` | Fully replaced by `/code-review`, `/dead-code`, `/security-review`, `/simplify` built-in skills. |
| `.cursor/commands/code-review/deslop.md` | Exact duplicate of built-in `deslop` and `unslop` skills. |
| `.cursor/commands/code-review/quick-diff-review.md` | All 6 sections replaced by `/code-review` at various effort levels. |
| `.cursor/commands/code-review/systematic-code-review-process.md` | All 6 sections replaced by `/code-review` and `/security-review`. |
| `.cursor/commands/database/supabase-data-explorer.md` | 100% aspirational content; covered by `supabase` skill and CLAUDE.md. |
| `.cursor/commands/database/supabase-realtime-monitor.md` | Aspirational monitoring system; no actionable content. |
| `.cursor/commands/database/supabase-type-generator.md` | Covered by `supabase gen types --local` and CLAUDE.md type generation rules. |
| `.cursor/commands/development/resume-current-task.md` | Claude Code's `--continue`/`--resume` and native behavior cover this. |

**Files with partial drops** (some sections migrate, rest drops):

| File | Sections Kept | Sections Dropped |
|------|---------------|------------------|
| `perform-comprehensive-pr-review.md` | Tone/Priorities/Templates -> CLAUDE.md; Checklists/Examples -> skills | GitHub Workflow (outdated MCP) |
| `supabase-backup-manager.md` | Backup/Recovery/Schedule -> skills (if expanded) | Metadata, Diagnostics, Storage, DR, Advanced |
| `supabase-migration-assistant.md` | Planning/Types/Safety -> CLAUDE.md; Validation/Rollback -> skills | MCP Integration |
| `supabase-performance-optimizer.md` | RLS Performance -> CLAUDE.md; Perf/Index/Storage/Functions -> skills | Query Optimization, Advanced/Meta |
| `supabase-schema-sync.md` | Safety Checks -> CLAUDE.md | Context, Workflow, Advanced, QA |
| `supabase-security-audit.md` | RLS -> CLAUDE.md; Permissions/API Keys -> commands | Auth Review, Vuln Scanning, Advanced |
| `create-nextjs-middleware.md` | Directory/Security/Composition/Testing/Validation -> CLAUDE.md; Main/Rate/CORS/Redirects -> skill | JWT Auth (conflicts Supabase), Advanced, Types, Monitoring, Docs, Report |
| `generate-nextjs-component.md` | Accessibility/Perf -> CLAUDE.md; rest -> command | None (all migrate) |
| `migrate-nextjs-project.md` | Validation/Cleanup -> CLAUDE.md; PreAnalysis/PagesToApp -> skills | JS-to-TS, Class-to-Functional, PostMigration, Report (weak) |
| `optimize-vercel-deployment.md` | Config/Rollback -> CLAUDE.md; PreDeploy/Monitoring -> skills; PostDeploy -> command | Build Opt, Deployment Exec, Perf Mon, Report, Recs |
| `sync-vercel-environment.md` | CI Automation -> CLAUDE.md; Validate/Backup/Diff/Template -> skills | Setup, Pull, Push, Monitoring (all in vercel:env) |
| `test-nextjs-api-routes.md` | Manual Testing/Fixtures/Config -> CLAUDE.md; Discovery/Suite/Perf/CI -> skills; Collection -> command | Test Reporting |
| `create-github-pull-request.md` | Title/Description/Testing/Checklist/PostSubmission -> CLAUDE.md; Context/Submission -> commands | PreValidation, Visual Aids |
| `analyze-github-pr-quality.md` | Analysis Criteria/Quality Standards -> CLAUDE.md | Checkout, Report, Success (all automated) |
| `pr-summary-description.md` | Summary Structure -> skill | Overview, Git Prep, Analysis Framework |
| `scaffold-new-feature.md` | Types/Components/Routing/Utils/Testing -> CLAUDE.md; Planning -> skill; Verification -> command | Directory (misaligned), State Management (contradicts) |
| `execute-task-list.md` | Branch/Loop/Issues/Review -> skill | Codebase Review, User Details |
| `refactor-recent-changes.md` | Assessment/Docs -> CLAUDE.md; Refactors -> skill; Overview/Identify/Present -> command | None |
| `analyze-nextjs-bundle.md` | Webpack -> skill; CI/CD -> skill | Setup, Analysis, Optimization, Recs, Report (~7,200 tokens) |
| `scaffold-nextjs-app.md` | Directory/Scripts -> CLAUDE.md; Init/Config/Validation -> skills | Starter Components, Docs, Report |
| `enforce-minimal-changes.md` | Full content -> CLAUDE.md (condensed) | Source file dropped after migration |
| `verify-task-implementation.md` | Brief checklist -> CLAUDE.md | Full workflow (replaced by verification-before-completion) |
| `review-pr-gh-cli.md` | Workflow/Styles/Criteria -> command | CLI Reference |
| `implement-pr-feedback.md` | Workflow/Errors -> command; Best Practices -> CLAUDE.md | None |

---

## 3. Cross-Cutting Patterns

### Pattern 1: Massive CLAUDE.md Duplication
`starter.mdc` is a verbatim copy of CLAUDE.md (~5,600 tokens). This is the single largest waste. It was likely created before CLAUDE.md existed and never reconciled. Delete it immediately.

### Pattern 2: Aspirational Wish Lists Posing as Rules
At least 8 files contain sections titled "Advanced Features" or "Monitoring Integration" that are bullet-point feature wishlists with zero implementation guidance. These inflate the token budget without providing actionable value. Found in: `supabase-backup-manager`, `supabase-data-explorer`, `supabase-performance-optimizer`, `supabase-realtime-monitor`, `supabase-schema-sync`, `supabase-security-audit`, `supabase-type-generator`.

### Pattern 3: Built-in Skill Redundancy
12 files contain code review, security scanning, or performance analysis workflows that are fully covered by Claude Code's built-in `/code-review`, `/security-review`, `/dead-code`, `/simplify`, and `/deslop` skills. The Cursor files pre-date these skills and offer less capability than the built-ins.

### Pattern 4: Generic Knowledge Encoded as Project Rules
Many sections contain standard web development knowledge (TypeScript migration, React class-to-functional, CORS setup, JWT basics) that LLMs know natively. These inflate context without adding project-specific value. Total estimated waste: ~15,000 tokens.

### Pattern 5: Cursor-Specific Patterns Incompatible with Claude Code
Several files reference "Supabase MCP integration", "mcp_github_*" tools, or `$ARGUMENTS` template variables that are Cursor IDE-specific and non-functional in Claude Code. Found in: `supabase-migration-assistant`, `supabase-data-explorer`, `supabase-backup-manager`, `supabase-schema-sync`, `perform-comprehensive-pr-review` (GitHub workflow section).

### Pattern 6: Missing Project-Specific Guidance in Valuable Templates
The strongest content (PR review templates, middleware patterns, edge function scaffolding) is written generically for "any Next.js project" rather than tailored to this specific stack (Next.js 15.3 + Supabase + Tailwind v4 + shadcn/ui). Migration should specialize these for the actual project.

### Pattern 7: Conflicting Architectural Guidance
`scaffold-new-feature.md` recommends Redux/Zustand state management and `features/[name]/` directory structure, both of which contradict the project's Server-First architecture and `app/(dashboard)/` routing documented in CLAUDE.md.

### Pattern 8: Review Culture as Strongest Asset
The single most valuable file is `perform-comprehensive-pr-review.md`. Its tone guidance, multi-pass methodology, systematic questions, and concrete bad/good examples represent an opinionated review culture that no built-in skill provides. This content should be preserved carefully.

---

## 4. Migration Plan

### Phase 1: Eliminate Pure Waste (Effort: Trivial)

| Step | Action | Tokens Freed |
|------|--------|-------------|
| 1a | Delete `starter.mdc` | 5,600 |
| 1b | Delete `CUSTOMIZATION_GUIDE-audit.md` | 1,200 |
| 1c | Delete `deslop.md` | 95 |
| 1d | Delete `audit-codebase-quality.md` | 3,200 |
| 1e | Delete `quick-diff-review.md` | 700 |
| 1f | Delete `systematic-code-review-process.md` | 1,050 |
| 1g | Delete `supabase-data-explorer.md` | 280 |
| 1h | Delete `supabase-realtime-monitor.md` | 850 |
| 1i | Delete `supabase-type-generator.md` | 850 |
| 1j | Delete `resume-current-task.md` | 350 |
| **Total** | **10 files deleted** | **~14,175** |

Each file is either a full duplicate of CLAUDE.md, a full duplicate of built-in skills, or 100% aspirational content with zero actionable guidance.

### Phase 2: CLAUDE.md Enrichment (Effort: Small)

| Step | Action | Net Tokens Added |
|------|--------|-----------------|
| 2a | Add Minimal Changes Principle as Critical Rule #12 | +80 |
| 2b | Add Code Review Voice and Methodology section | +600 |
| 2c | Add PR Conventions section (title, description, checklist) | +400 |
| 2d | Add Security Headers subsection | +150 |
| 2e | Add Middleware Architecture subsection | +120 |
| 2f | Add Accessibility Requirements subsection | +150 |
| 2g | Add Refactoring Assessment Criteria subsection | +150 |
| 2h | Add RLS Performance Tips to existing RLS section | +100 |
| 2i | Add Vercel Config Patterns and Rollback to Dev Workflow | +200 |
| 2j | Add API Testing Reference to Testing section | +150 |
| 2k | Add Migration Safety to existing migration section | +100 |
| **Total** | **11 additions** | **~2,200** |

Sources for 2a-2k can then be deleted from their Cursor files, freeing the tokens listed in Phase 3.

### Phase 3: High-Value Skill Creation (Effort: Medium)

Create these skills first (highest unique value, most usage):

| Step | Skill | Source File(s) | Est. Effort |
|------|-------|---------------|-------------|
| 3a | `frontend-review-patterns` | comprehensive-pr-review.md (FE01-11) | Medium |
| 3b | `backend-review-patterns` | comprehensive-pr-review.md (BE01-08) | Medium |
| 3c | `api-route-test-generator` | test-nextjs-api-routes.md | Medium |
| 3d | `nextjs-performance-audit` | audit-nextjs-performance.md | Medium |
| 3e | `review-checklists` | comprehensive-pr-review.md (checklists) | Small |
| 3f | `execute-task-list` | execute-task-list.md | Small |
| 3g | `focused-refactor` | refactor-recent-changes.md | Small |

After creating each skill, delete the corresponding sections from the Cursor source file.

### Phase 4: Command Migration (Effort: Medium)

| Step | Command | Source File(s) |
|------|---------|---------------|
| 4a | `/generate-component` | generate-nextjs-component.md |
| 4b | `/generate-edge-function` | generate-vercel-edge-function.md |
| 4c | `/implement-pr-feedback` | implement-pr-review-feedback.md |
| 4d | `/gh-pr-review` | review-pr-with-gh-cli.md |
| 4e | `/validate-deployment` | optimize-vercel-deployment.md |
| 4f | `/refactor-recent` | refactor-recent-changes.md |
| 4g | `/generate-api-collection` | test-nextjs-api-routes.md |

After each command is migrated and tested, delete the Cursor source file.

### Phase 5: Utility Skill Creation (Effort: Small)

Lower-priority skills with clear value:

| Step | Skill | Source |
|------|-------|--------|
| 5a | `env-validate` | sync-vercel-environment.md |
| 5b | `env-backup-restore` | sync-vercel-environment.md |
| 5c | `env-diff` | sync-vercel-environment.md |
| 5d | `env-template-generate` | sync-vercel-environment.md |
| 5e | `nextjs-webpack-optimization` | analyze-nextjs-bundle.md |
| 5f | `bundle-monitoring-ci` | analyze-nextjs-bundle.md |
| 5g | `nextjs-middleware-generator` | create-nextjs-middleware.md |
| 5h | `pre-deploy-validate` | optimize-vercel-deployment.md |
| 5i | `vercel-monitoring-setup` | optimize-vercel-deployment.md |

After creating skills, delete remaining Cursor source files.

### Phase 6: Remaining Cleanup (Effort: Small)

| Step | Action |
|------|--------|
| 6a | Delete `supabase-backup-manager.md` (backup skills too vague to keep without expansion) |
| 6b | Delete `supabase-performance-optimizer.md` (after CLAUDE.md RLS addition; skills too vague) |
| 6c | Delete `supabase-migration-assistant.md` (after CLAUDE.md safety additions) |
| 6d | Delete `supabase-schema-sync.md` (after CLAUDE.md safety additions) |
| 6e | Delete `supabase-security-audit.md` (Permission/API Key commands low priority) |
| 6f | Delete `scaffold-new-feature.md` (after CLAUDE.md additions) |
| 6g | Delete `scaffold-nextjs-app.md` (after CLAUDE.md additions + 2 skills) |
| 6h | Delete `migrate-nextjs-project.md` (after migration skills created) |
| 6i | Delete `analyze-nextjs-bundle.md` (after skills created) |
| 6j | Delete `optimize-vercel-deployment.md` (after skills/commands created) |
| 6k | Delete `sync-vercel-environment.md` (after skills created) |
| 6l | Delete `pr-summary-description.md` (after skill created or verified overlap) |
| 6m | Delete `analyze-github-pr-quality.md` (after CLAUDE.md additions) |
| 6n | Delete `verify-task-implementation.md` (covered by verification-before-completion) |
| 6o | Delete `enforce-minimal-changes-principle.md` (after CLAUDE.md addition) |
| 6p | Delete remaining empty `.cursor/commands/` directories |

---

**Final State**: CLAUDE.md grows by ~2,200 tokens (well within budget). 19 skills and 7 commands replace 36 Cursor files. ~85,000 tokens of Cursor rules reduce to ~24,000 tokens of targeted, non-redundant guidance. All built-in skill overlaps eliminated.
